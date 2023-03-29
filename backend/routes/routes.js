// We create the express router
const express = require('express')
const router = express.Router()

// Get all routes
router.get('/', (req, res) => {
    res.json({mssg: "GET all routes"})
})

// Get a single route
router.get('/:id', (req, res) => {
    res.json({mssg: "GET a single route"})
})

// Post a new route
router.post('/', (req, res) => {
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