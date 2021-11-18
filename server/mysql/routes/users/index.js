const express = require('express');
const router = express.Router();
const register = require('./register');
const login = require('./login');
const logout = require('./logout');

const { auth } = require("../../middleware/auth");

router.get("/auth", auth, (req, res) => {
    res.status(200).json({
        id: req.user.id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        role: req.user.role,
        image: req.user.image,
        address: req.user.address,
        gender: req.user.gender,
        phone: req.user.phone,
        birth: req.user.birth,
        couple_code: req.user.couple_code,
        message: req.user.message,
    });
});

router.use('/register', register);
router.use('/login', login);
router.use('/logout', logout);

module.exports = router;