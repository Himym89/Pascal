// require("dotenv").config();
const express = require("express");
const cors = require("cors");
// const {Favorit} = require('./db/models')
const session = require('express-session')
const FileStore = require('session-file-store')(session);
const authRouter = require('./routes/auth.router')
const restRouter = require('./routes/restaurant.router')
const app = express();


// const PORT = process.env.PORT ?? 3002;
const PORT = 3002;


app.use(cors({
  origin: true,
  credentials: true,
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  name: 'auth',
  secret: 'qwerty',
  resave: false,
  saveUninitialized: false,
  store: new FileStore({}),
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1e3 * 86400, // COOKIE'S LIFETIME — 1 DAY
  },
}))


app.use('/api/auth', authRouter)
app.use('/api/restaurants', restRouter)

app.listen(PORT, () => {
  console.log(`SERVER STARTED ON PORT`, PORT);
});

