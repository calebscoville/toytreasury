module.exports = {
    addtoy: (req, res) => {
        const {title, description, condition, missingpieces, extrainfo, url} = req.body
        const db = req.app.get('db')
        db.add_toy({
            title,
            description,
            condition,
            missingpieces,
            extrainfo,
            url
        })
        .then(res.status(200).send('Good job!'))
    },
    getAllToys: async ( req, res ) => {
        const db = req.app.get('db');

        const toy_info = await db.get_toy_info()
        res.status(200).send( toy_info )
        console.log(toy_info)
    },

    

}