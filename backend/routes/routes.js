// Imports
const {
    getRoutes,
    getRoute,
    createRoute
}= require('../controllers/routeController')

// We create the express router
const express = require('express')
const router = express.Router()

// Get all routes
router.get('/', getRoutes)

// Get a single route
router.get('/:id', getRoute)

// Post a new route
router.post('/', createRoute)

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