require ('dotenv').config()
const express = require('express'),
    session = require('express-session'),
    massive = require('massive'),
    auth_ctrl = require('./controllers/auth_controller')
    main_ctrl = require('./controllers/main_controller')
    stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
    bodyParser = require('body-parser')
    cors = require('cors')

const app = express()
const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env

app.use(bodyParser.json());
app.use(cors())



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
app.put('/auth/edit/:id', auth_ctrl.edit)
app.delete('/auth/delete/:id', auth_ctrl.delete)
// app.get('/auth/join/:id' auth_ctrl.join)
// app.put('/auth/update', auth_ctrl.update)

app.post('/api/payment', function(req, res, next){
    //convert amount to pennies
    const amountArray = req.body.amount.toString().split('');
    const pennies = [];
    for (var i = 0; i < amountArray.length; i++) {
      if(amountArray[i] === ".") {
        if (typeof amountArray[i + 1] === "string") {
          pennies.push(amountArray[i + 1]);
        } else {
          pennies.push("0");
        }
        if (typeof amountArray[i + 2] === "string") {
          pennies.push(amountArray[i + 2]);
        } else {
          pennies.push("0");
        }
          break;
      } else {
          pennies.push(amountArray[i])
      }
    }
    const convertedAmt = parseInt(pennies.join(''));
  
    const charge = stripe.charges.create({
    amount: convertedAmt, // amount in cents, again
    currency: 'usd',
    source: req.body.token.id,
    description: 'Test charge from react app'
  }, function(err, charge) {
      if (err) return res.sendStatus(500)
      return res.sendStatus(200);
    // if (err && err.type === 'StripeCardError') {
    //   // The card has been declined
    // }
  });
  });