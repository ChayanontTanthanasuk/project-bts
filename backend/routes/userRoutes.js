const express = require('express');
const router = express.Router();
const {signup , login} = require('../controllers/userControllers');

// สมัครสมาชิก
router.post('/signup', signup); // done // เอาไว้ Signup

// เข้าสู่ระบบ
router.post('/login', login); // done // เอาไว้ Signup// เอาไว้ Login

// เหลือ getUser , delUser , putUser (ถ้าจะทำอะนะ) ทำใน userControllers

module.exports = router;
