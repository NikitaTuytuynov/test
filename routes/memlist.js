const express = require('express')
const controller = require('../controllers/cont')
const router = express.Router()


router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.delete('/:id', controller.remove)
router.post('/', controller.create)


module.exports = router