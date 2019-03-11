'use strict'

/* AUTH ENDPOINT */

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// GET
module.exports.post = async (req, res) => {

    // Check if user exist in mongo db by username

    // Check if sent PW match encrypted PW in db ( bcrypt.compare(reqPW, hashPW) )

    // if match, return signed JWT

    // if missmatch, return 402
}

module.exports.isAdmin = async (authtoken) => {
    
    // Decode JWT with process.env.SECRET
    
    // Get user from db with decoded token > uid

    // Get user role and return true / false

}

module.exports.verifyToken = async (token) => {
    
    try {
        // Verify JWT with process.env.SECRET, return token
        
    } catch(err){
        // if error = not valid token, return 'not valid token.'
    }
}
