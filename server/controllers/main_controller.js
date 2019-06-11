module.exports = {
    posttoy: (req, res) => {
        const {title, description, condition, missingpieces, extrainfo, url} = req.body
        const db = req.app.get('db')
        db.toy_info({
            title,
            description,
            condition,
            missingpieces,
            extrainfo,
            url
        })
        .then(res.status(200).send('Good job!'))
    }
    getAllToys: ( req, res, next ) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_toy_info()
        .then( get_toy_info => res.status(200).send( get_toy_info ))
        .catch( err => {
            res.status(500).send({errorMessage: "Sorry, sorry, sorry. We are working on this problem:)"})
            console.log(err)
        });
    },

}