var express = require('express');
const { add_user, add_task, dashboard, all_task, delete_user, update_user } = require('../controller/index');
var router = express.Router();
const cors = require('cors');
const { checktoken } = require('../Middleware/auth');
router.use(cors());

/* GET home page. */
router.post('/add_user',checktoken, add_user);
router.post('/add_task/:id',checktoken, add_task);
router.get('/dashboard',checktoken, dashboard);
router.get('/all_task/:id',checktoken, all_task);
router.delete('/delete_user/:id',checktoken, delete_user);
router.put('/update_user/:id',checktoken, update_user);

module.exports = router;
