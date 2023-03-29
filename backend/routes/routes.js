// We create the express router
const express = require('express')
const router = express.Router()

// Import model
const Route = require('../models/routemodel')

// Get all routes
router.get('/', (req, res) => {
    res.json({mssg: "GET all routes"})
})

// Get a single route
router.get('/:id', (req, res) => {
    res.json({mssg: "GET a single route"})
})

// Post a new route
router.post('/', async (req, res) => {
    const{title, description, location} = req.body
    
    try{
        const route = await Route.create({title, description, location})
        res.status(200).json(route)
    }catch(error){
        res.status(400).json({error: error.message})
    }

    res.json({mssg: "POST a new route"})
})

// Delete a route
router.delete('/:id', (req, res) => {
    res.json({mssg: "DELETE a single route"})
})

// Update a route
router.patch('/:id', (req, res) => {
    res.json({mssg: "UPDATE a single route"})
})

// Exports router
module.exports = router 