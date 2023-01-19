const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeSchema = new Schema({
    profileImage: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    hobbies: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
})


module.exports = mongoose.model('users', employeeSchema);