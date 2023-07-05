var express = require('express');
const { user_login, dashboard, user_task_complete, user_task_delete } = require('../controller/user');
var router = express.Router();

/* GET users listing. */
router.get('/', user_login)
router.get('/dashboard/:name', dashboard)
router.get('/:id/task/1', user_task_complete)
router.get('/:id/task/2', user_task_delete)

module.exports = router;
