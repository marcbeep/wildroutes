// Imports
const {
    getRoutes,
    getRoute,
    createRoute,
    deleteRoute,
    updateRoute
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
router.delete('/:id', deleteRoute)

// Update a route
router.patch('/:id', updateRoute)

// Exports router
module.exports = router 