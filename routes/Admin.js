var express = require('express');
var router = express.Router();
const cors = require('cors');
const { admin_login, check_email, update_admin } = require('../controller/Admin');
router.use(cors());

router.post('/login', admin_login);
router.post('/check_email', check_email);
router.post('/update/:id', update_admin);
module.exports = router;