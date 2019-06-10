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
}