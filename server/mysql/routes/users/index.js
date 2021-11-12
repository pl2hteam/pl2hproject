const express = require('express');
const router = express.Router();
const register = require('./register');
const login = require('./login');
const logout = require('./logout');

const { auth } = require("../../middleware/auth");

router.get("/auth", auth, (req, res) => {
    res.status(200).json({
      // DB 테이블 맞추기
        id: req.user.id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.nickname,
        // lastname: req.user.lastname,
        // role: req.user.role,
        // image: req.user.image,
    });
});

router.use('/register', register);
router.use('/login', login);
router.use('/logout', logout);

module.exports = router;
