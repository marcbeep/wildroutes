
// Require dot env
require('dotenv').config()

//Require router
const routes = require('./routes/routes')

// Require express package and invoke express method
const express = require('express')
const app = express()


// Middleware 
//mw to look to see if there's data
app.use(express.json())
//mw to log requests
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/routes', routes)

/* Set up a route handler requests and responses
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome'})
})
*/ 

//Listen for requests
app.listen(process.env.PORT, () => {
    //Note use of fn to log
    console.log('Listening on port', process.env.PORT)
})
