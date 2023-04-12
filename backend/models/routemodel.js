const mongoose = require('mongoose')
const Schema = mongoose.Schema

// A schema defines the structure of a document
const routeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    user_id:{
        type: String,
        required: true
    },
    likedBy:[
        {
            type: String
        }
    ]
})

// A model applies that schema to a particular model
module.exports = mongoose.model('Route', routeSchema)
