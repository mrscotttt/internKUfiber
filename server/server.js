const express = require('express')
const app = express();
const cors = require("cors");
const session = require('express-session')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const bodyParser = require('body-parser')
const User = require('./server/model/User');

// connect mongodb database
require('./server/database/database')();

app.use(express.json());
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(
  session({
    secret: 'my_super_secret',
    resave: false,
    saveUninitialized: false
  })
)

app.use('/',require('./server/router/router'));

//login
const bcrypt = require('bcrypt')

app.post('/register',async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if(!username || !password) {
    res.send({
        message: "Please try again"
        })
  }
  else{
    res.send({
        message: "Already Done"
        })
    const passwordHash = bcrypt.hashSync(password, 10)
    const user = new User({
        username,
        password: passwordHash
    })
    user.save()
  }
}
)

app.post('/login', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  // simple validation
  if (!username || !password) {
    return res.send({message: "not"})
  }
  const user = await User.findOne({
    username
  })
  if (user) {
    const isCorrect = bcrypt.compareSync(password, user.password)
    if (isCorrect) {
      req.session.user = user
      //return res.render('index', { user })
      return res.send({message: "go"})
    } else {
      //return res.render('login', { message: 'Username or Password incorrect' })
      return res.send({message: "not"})
    }
  } else {
    //return res.render('login', { message: 'Username does not exist.' })
    return res.send({message: "not"})
  }
})

const isLoggedIn = (req, res, next) => {
    if (!req.session.user) {
      //return res.redirect('/login'),
      return res.send({message: "not success yet!"})
    }
    next()
}

app.get('/login', isLoggedIn, function (req, res, next) {
  //res.render('index', { title: 'Express' })
  res.send({message: "go"})
})

/*app.get('/logout', isLoggedout, function (req, res, next) {
  //res.render('index', { title: 'Express' })
  res.send({message: "logput"})
})*/

app.listen(8888, () => console.log(`Server is stated on http://localhost:8888`));
