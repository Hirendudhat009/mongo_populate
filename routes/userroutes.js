const express = require('express')
const userController = require('../controller/usercontroller')

const router = express.Router();

router.post('/', userController.postUser);

router.get('/', userController.getUser)

module.exports = router