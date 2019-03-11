'use strict'
/* USERS ENDPOINT */

let uuid = require('uuid/v4');
let User = require('../models/User');
let Auth = require('./auth');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// POST
module.exports.post = async (req, res) => {
        
    // Check if req is done by admin via authToken
    try {

        let newUser = {
            uid: String,
            role: String,
            username: String,
            password: String // encrypt pw before saving to DB
        }

        // Create user in Mongo /users

        // Return created user to Front End for UI confirm ( user X is created.)

    } catch(err) {
        res.status(400).send(err.stack);
    }
}