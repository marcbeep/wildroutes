const mongoose = require('mongoose')
const Schema = mongoose.Schema

// A schema defines the structure of a document
const routeSchema = new Schema({
    title: {
        type: String,
        required: true
    },    
    region:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    tag:{
        type: String,
        required: true
    },
    noLikes:{
        type: Number,
        default: 0
    },
    likedBy:[
        {
            type: String
        }
    ]
})

// A model applies that schema to a particular model
module.exports = mongoose.model('Route', routeSchema)
