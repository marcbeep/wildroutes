// Imports
const {
    getRoutes,
    getRoute,
    getRegion,
    likeRoute,
    getLikedRoutes,
    createRoute,
    deleteRoute,
    updateRoute
}= require('../controllers/routeController')

const requireAuth = require('../middleware/requireAuth')

// We create the express router
const express = require('express')
const router = express.Router()

//require auth for all routes
router.use(requireAuth)

// Get all routes
router.get('/', getRoutes)

// Get a single route
router.get('/:id', getRoute)

// Get region
router.get('/test/:region', getRegion)

// Like a route
router.patch('/like/:id', likeRoute)

// Get all liked routes
router.get('/liked', getLikedRoutes)

// Post a new route
router.post('/', createRoute)

// Delete a route
router.delete('/:id', deleteRoute)

// Update a route
router.patch('/:id', updateRoute)

// Exports router
module.exports = router 