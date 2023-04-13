// Imports
const Route = require('../models/routemodel')
const User = require('../models/userModel')
const mongoose = require('mongoose')

// Get all routes

const getRoutes = async(req, res) => {
    /*
    const user_id = req.user._id
    const routes = await Route.find({user_id})
    */
    const routes = await Route.find({}).sort({"location": 1})
    res.status(200).json(routes)
}

// Get single route

const getRoute = async(req, res) => {

    const {id} = req.params
    console.log(req.params)
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such route'})
    }
    const route = await Route.findById(id)
    if(!route){
        return res.status(404).json({error: 'No such route'})
    }
    res.status(200).json(route)
}

// Get region

const getRegion = async(req, res) => {
    const {region} = req.params
    console.log(region)
    const routes = await Route.find({region: region})
    res.status(200).json(routes)
}

// Get south west

const getsw = async(req, res) => {
    const routes = await Route.find({region: "sw"})
    res.status(200).json(routes)
}

// Get south east

const getse = async(req, res) => {
    const routes = await Route.find({region: "se"})
    res.status(200).json(routes)
}

// Get east

const gete = async(req, res) => {
    const routes = await Route.find({region: "e"})
    res.status(200).json(routes)
}

// Get midlands

const getm = async(req, res) => {
    const routes = await Route.find({region: "m"})
    res.status(200).json(routes)
}

// Get north west

const getnw = async(req, res) => {
    const routes = await Route.find({region: "nw"})
    res.status(200).json(routes)
}

// Get north east

const getne = async(req, res) => {
    const routes = await Route.find({region: "ne"})
    res.status(200).json(routes)
}

// Get wales

const getw = async(req, res) => {
    const routes = await Route.find({region: "w"})
    res.status(200).json(routes)
}

// Get scotland

const gets = async(req, res) => {
    const routes = await Route.find({region: "s"})
    res.status(200).json(routes)
}

// Like a Single route

const likeRoute = async(req, res) => {
    const {id} = req.params
    const user_id = req.user._id

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such route'})
    }
    const route = await Route.findOneAndUpdate({_id : id}, {$push : {likedBy: user_id}})
    if(!route){
        return res.status(400).json({error: 'No such route'})
    }
    res.status(200).json(route)
}

// Get all Liked routes
const getLikedRoutes = async(req, res) => {
    const user_id = req.user._id
    const routes = await Route.find({likedBy:user_id}).sort({"location": 1})
    res.status(200).json(routes)
}

// Create new route
const createRoute = async(req, res) => {
    const{title, region, location, description, tag} = req.body
    
    // Add doc to db
    try{
        const route = await Route.create({title, region, location, description, tag})
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
    getRoute,
    getRegion,
    likeRoute,
    getLikedRoutes,
    createRoute,
    deleteRoute,
    updateRoute
}