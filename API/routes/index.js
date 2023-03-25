var express = require('express');
var router = express.Router();
const controller = require('../controller/index')


/* GET home page. */
router.route('/')
  .get(controller.getRespond)
  .post(controller.postRespond)
module.exports = router;
