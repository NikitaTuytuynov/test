const users1 = require('../models/users')
const errorHendler = require('../utils/errorHandler')



module.exports.getAll = async function(req, res) {
    try {
        const users2 = await users1.find()
        res.status(200).json(users2)
    } catch (e) {
        errorHendler(res, e)
    }
}

module.exports.getById = async function(req, res) {
    try {
        const user2 = await users1.findById(req.params.id)
        res.status(200).json(user2)
    } catch (e) {
        errorHendler(res, e)
    }
}

module.exports.remove = async function(req, res) {
    try {
        await users2.remove({_id: req.params.id})
        res.status(200).json({
            message: 'User deleted.'
        })
    } catch (e) {
        errorHendler(res, e)
    }
}

module.exports.create = async function(req, res) {
    console.log(req.body);
    const user2 = new users1({
        profileImage: req.body.profileImage,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        hobbies: req.body.hobbies,
        country: req.body.country,
    })
    try {
        await user2.save()
        res.status(201).json(user2)

    } catch (e) {
        errorHendler(res, e)
    }
}