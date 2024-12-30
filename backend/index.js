const express = require('express')
const mongoose = require('mongoose');
const Login = require('./API/Login');
const passport = require('passport')
// const session = require('express-session');
require('dotenv').config()
const cors = require("cors");

const app = express()
const port = 3000

app.use(cors());
app.use(passport.initialize());

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("database Connected!!!"))
    .catch((error) => console.log("here is the error: " + error))

app.use("/api", express.json(), Login);

