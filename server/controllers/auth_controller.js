const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const {image, firstname, lastname, email, username, password, city} = req.body
        const db = req.app.get('db')
        const {session} = req
        const userFound = await db.check_user_email({ email })
        // console.log(userFound[0])
        if(userFound[0]) return res.status(409).send('Email already exists')
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const createdUser = await db.register_user({
            image,
            firstname,
            lastname,
            email,
            username,
            password: hash,
            city
        })

        session.user = {id: createdUser[0].user_id, username: createdUser[0].username, image: createdUser[0].image, firstname: createdUser[0].first_name, lastname: createdUser[0].last_name, email: createdUser[0].email, city: createdUser[0].city}
        res.status(200).send(session.user)
    },

    login: async (req, res) => {
        const {username, password} = req.body
        console.log(req.body)
        const db = req.app.get('db')
        const { session } = req
        const userFound = await db.check_username({username})
        if(!userFound[0]) return res.status(401).send('Email does not exist')
        const authenticated = bcrypt.compareSync(password, userFound[0].password)
        if (authenticated) {
            session.user = {id: userFound[0].user_id, username: userFound[0].username, image: userFound[0].image, firstname: userFound[0].first_name, lastname: userFound[0].last_name, email: userFound[0].email, city: userFound[0].city}
            console.log(session.user)
            res.status(200).send(session.user)
        } else {
            return res.status(401).send('Incorrect username or password')
        }
    },
    getDetails: async (req, res) => {
        const db = req.app.get('db')
        const {session} = req
        const {id} = req.params
        if(session.user){
            const details = await db.get_user_details(id)
            console.log(details)
            const {image, first_name, last_name, email, username, password, city, user_id} = details[0]
            return res
            .status(200)
            .send({
                image,
                first_name,
                last_name,
                email,
                username,
                password,
                city,
                user_id,
                username: session.user.username 
            })
        }
        return res.status(401).send('Please Log In')
    },

    getUser: (req, res) => {
        const { session } = req 
        if(session.user){
            return res.status(200).send(session.user)
        } else {
            return res.status(401).send('Please Log In')
        }
    },

    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    }

    edit: ( req, res, next ) => {
        const db = req.app.get('db');
        const { params, query } = req;

        db.edit_user([params.id, query.desc])
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({ errorMessage: "Oh no! But it's okay, we're on it like butter on a banana!"})
            console.log(err)
        })
    }

    // update: (req, res) => {
    //     let index = null;
    // books.forEach((book, i) => {
    //   if (book.id === Number(req.params.id)) index = i;
    // });
    // books[index] = {
    //   id: books[index].id,
    //   title: req.body.title || books[index].title,
    //   author: req.body.author || books[index].author
    // };
    // res.status(200).send(books);
    // }
}