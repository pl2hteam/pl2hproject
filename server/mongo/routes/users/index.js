const express = require('express');
const router = express.Router();
const register = require('./register');
const login = require('./login');
const logout = require('./logout');

const { auth } = require("../../middleware/auth");

router.get("/auth", auth, (req, res) => {
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        image: req.user.image,
    });
});

router.use('/register', register);
router.use('/login', login);
router.use('/logout', auth, logout);

module.exports = router;
