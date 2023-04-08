// Imports
const {
    getRoutes,
    getLikedRoutes,
    getRoute,
    createRoute,
    deleteRoute,
    updateRoute,
    likeRoute
}= require('../controllers/routeController')

const requireAuth = require('../middleware/requireAuth')

// We create the express router
const express = require('express')
const router = express.Router()

//require auth for all routes
router.use(requireAuth)

// Get all routes
router.get('/', getRoutes)

// Get all liked routes
router.get('/liked', getLikedRoutes)

// Get a single route
router.get('/:id', getRoute)

// Post a new route
router.post('/', createRoute)

// Delete a route
router.delete('/:id', deleteRoute)

// Like a route
router.patch('/like/:id', likeRoute)

// Update a route
router.patch('/:id', updateRoute)

// Exports router
module.exports = router 