
const User = require('../models/userModel')
// login user
const loginUser = async (req, res) => {
    res.json({mssg: 'Login user'})
}

// signup user
const signupUser = async (req, res) => {
    res.json({mssg: 'Signup user'})
}

module.exports = {loginUser, signupUser}