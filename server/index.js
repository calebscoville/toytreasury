require ('dotenv').config()
const express = require('express'),
    session = require('express-session'),
    massive = require('massive'),
    auth_ctrl = require('./controllers/auth_controller')
    main_ctrl = require('./controllers/main_controller')
const app = express()
const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env


app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    saveUnitialized: false,
    resave: false,
    cookie: {
        maxage: 1000 * 60 * 60
    }
}))



massive(CONNECTION_STRING).then((database) => {
    app.set('db', database)
    console.log('database set')
    app.listen(SERVER_PORT, () => console.log(`mm michelle ${SERVER_PORT}`))
})

app.post('/auth/register', auth_ctrl.register)
app.post('/auth/login', auth_ctrl.login)
app.post('/api/toy', main_ctrl.addtoy)
app.get('/auth/details/:id', auth_ctrl.getDetails)
app.get('/auth/user', auth_ctrl.getUser)
app.get('/auth/logout', auth_ctrl.logout)
app.get('/api/alltoys', main_ctrl.getAllToys)

