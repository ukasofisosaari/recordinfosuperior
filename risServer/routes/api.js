const express = require('express');
const router = express.Router();

const user_controller = require("../controllers/userController");

router.get('/user/:id', user_controller.user_detail);

module.exports = router;
