
// Require dot env
require('dotenv').config()

// Require express package and invoke express method
const express = require('express')
const app = express()

// Middleware to log requests
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Set up a route handler requests and responses
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome'})
})

//Listen for requests
app.listen(process.env.PORT, () => {
    //Note use of fn to log
    console.log('Listening on port', process.env.PORT)
})
