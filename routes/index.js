var express = require('express');
const { register, admin_login, add_user, add_task, dashboard } = require('../controller');
var router = express.Router();

/* GET home page. */
router.post('/', register);
router.get('/login', admin_login);
router.post('/add_user', add_user);
router.post('/add_task/:id', add_task);
router.get('/dashboard', dashboard);
module.exports = router;
