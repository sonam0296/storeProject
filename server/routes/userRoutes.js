const router = require('express').Router();
const userCtrl = require('../controller/userCtrl')

router.post('/register', userCtrl.isRegister);

router.post('/login', userCtrl.isLogin);

router.get('/getUser', userCtrl.getUsers);

router.get('/getUser/:id', userCtrl.getUserById);

// router.get("/getUser/count", userCtrl.getUserCount);

module.exports = router