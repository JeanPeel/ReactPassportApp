if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const mongoose = require('mongoose');
const path = require('path');

const PORT = process.env.PORT || 3030;
const app = express()

const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')

const H = require('./models/H');

const initializePassport = require('./passport-config')
initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)

mongoose.Promise = global.Promise;

let MONGODB_URI = process.env.NODE_ENV
    ? process.env.MONGODB_URI
    : "mongodb://<dbuser>:<dbpassword>@ds141490.mlab.com:41490/heroku_bwqsgrdb";

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// const users = []

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("client/build"));

app.delete("/:id", (request, response) => {
  const mongoID = request.params.id;
  ToDo.remove({
      _id: mongoID,
  })
      .then((data) => {
          response.status(200).end();
      })
      .catch((error) => {
          response.status(404).send(error.message);
      });
});

app.post("/HT", (request, response) => {
  const HD = request.body;
  console.log('is this working?', HD)
  H.create(HD, function () {
      response.status(200).end();
  })
});

app.put('/api/updateScore/:id', function (req, res) {
  //Habit.update()
  console.log(`
          put route /api/
          
          req.body :${JSON.stringify(req.body)}
          req.params: ${req.params.id}
          `)
  H.updateOne({ _id: req.params.id }, { score: req.body.score })
      .then(data => {
          res.json(data)
      })

})

app.get('/api/SH', function (req, res) {
  console.log(`
          sorted get route /api/
          
          req.body :${JSON.stringify(req.body)}
          req.params: ${req.params.id}
          `)

  H.find({})
      // .limit(10)
      // .sort('score')
      .then(data => {
          res.json(data)
          console.log('get sorted Habits: ', data)
      })
      .catch(function () {
          response.status(404).end("Can not find and sort list!");
      });

});

app.get("/HT", (request, response) => {
  H.find({})
      .then(function (data) {
          response.status(200).json(data);
      })
      .catch(function () {
          response.status(404).end("404!! Information BLACK HOLE!!");
      });
});

function sendIndex(request, response) {
  const indexPath = path.join(__dirname, 'client', 'build', 'index.html');

  response.sendFile(indexPath);
}

app
  .get("/F", sendIndex)
  .get("/H", sendIndex)
  .get("/L", sendIndex)
  .get("/Login", sendIndex);


app.set('view-engine', 'ejs')
// app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

app.get('/', checkAuthenticated, (req, res) => {
  res.render('index.ejs', { name: req.user.name })
})

app.get('/login', checkNotAuthenticated, (req, res) => {
  res.render('login.ejs')
})

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}))

app.get('/register', checkNotAuthenticated, (req, res) => {
  res.render('register.ejs')
})

app.post('/register', checkNotAuthenticated, async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    })
    res.redirect('/login')
  } catch {
    res.redirect('/register')
  }
})

app.delete('/logout', (req, res) => {
  req.logOut()
  res.redirect('/login')
})

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }

  res.redirect('/login')
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/')
  }
  next()
}

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});