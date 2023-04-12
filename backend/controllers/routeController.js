// Import model
const Route = require('../models/routemodel')

// Import mongoose
const mongoose = require('mongoose')

// Get all routes
const getRoutes = async(req, res) => {
    //const user_id = req.user._id
    //const routes = await Route.find({user_id})
    const routes = await Route.find({})
    res.status(200).json(routes)
}

// Like a single route
const likeRoute = async(req, res) => {
    const {id} = req.params
    const user_id = req.user._id

    // Checks to see if id is valid
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such route'})
    }

    const route = await Route.findOneAndUpdate({_id : id}, {$push : {likedBy: user_id}})

    if(!route){
        return res.status(400).json({error: 'No such route'})
    }
    
    res.status(200).json(route)
    

}

// Get all LIKED routes
const getLikedRoutes = async(req, res) => {
    const user_id = req.user._id
    const routes = await Route.find({likedBy:user_id})
    res.status(200).json(routes)
}

// Get single route
const getRoute = async(req, res) => {

    const {id} = req.params

    // Checks to see if id is valid
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such route'})
    }

    const route = await Route.findById(id)

    if(!route){
        return res.status(404).json({error: 'No such route'})
    }

    res.status(200).json(route)
}

// Create new route
const createRoute = async(req, res) => {
    const{title, description, location} = req.body
    
    // Add doc to db
    try{
        const user_id = req.user._id
        const route = await Route.create({title, description, location, user_id})
        res.status(200).json(route)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

// Delete single route
const deleteRoute = async(req, res) => {
    const {id} = req.params

    // Checks to see if id is valid
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such route'})
    }

    // The property name is not just id but _id
    const route = await Route.findOneAndDelete({_id : id})

    if(!route){
        return res.status(400).json({error: 'No such route'})
    }

    res.status(200).json(route)
}



// Update single route
const updateRoute = async (req, res) => {
    const {id} = req.params

    // Checks to see if id is valid
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such route'})
    }

    const route = await Route.findOneAndUpdate({_id : id}, {
        // Spread properties of object
        ...req.body
    })

    if(!route){
        return res.status(400).json({error: 'No such route'})
    }

    res.status(200).json(route)
}

// Exports
module.exports = {
    getRoutes,
    getLikedRoutes,
    getRoute,
    createRoute,
    deleteRoute,
    updateRoute,
    likeRoute
}