const mongoose = require('mongoose')
const Schema = mongoose.Schema

// A schema defines the structure of a document
const routeSchema = new Schema({
    title: {
        type: String,
        required: true,
        default: "No title"
    },    
    region:{
        type: String,
        required: true,
        default: "No region"
    },
    location:{
        type: String,
        required: true,
        default: "No location"
    },
    description:{
        type: String,
        required: true,
        default: "No description"
    },
    tag:{
        type: String,
        required: true,
        default: "No tag"
    },
    madeBy:{
        type: String,
        required: true,
        default: "Wildroutes Staff"
    },
    contactDetails:{
        type: String,
        required: true,
        default: "No contact details"
    },
    noLikes:{
        type: Number,
        default: 0
    },
    likedBy:[
        {
            type: String
        }
    ],
    image:{
        type: String,
        required: true,
        default: "https://images.pexels.com/photos/7130469/pexels-photo-7130469.jpeg"    
    }
})

// A model applies that schema to a particular model
module.exports = mongoose.model('Route', routeSchema)
