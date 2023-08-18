var express = require('express');
const { user_login, dashboard, user_task_complete, user_task_delete, check_email, update_user, all_task } = require('../controller/user');
var router = express.Router();
const cors = require('cors');
const { checktoken } = require('../Middleware/auth');
router.use(cors());

/* GET users listing. */
router.post('/', user_login)
router.get('/dashboard/:id',checktoken, dashboard)
router.get('/all_task/:id',checktoken, all_task)
router.get('/:id/task/1',checktoken, user_task_complete)
router.get('/:id/task/2',checktoken, user_task_delete)
router.post('/check_email',checktoken, check_email)
router.post('/update/:id',checktoken, update_user)

module.exports = router;
