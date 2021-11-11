const express = require('express');
const router = express.Router();
const register = require('./register');
const login = require('./login');
const logout = require('./logout');
const authRouter = require('./auth');

const { auth } = require("../../middleware/auth");

/////////////////////////////////////////////////////
/*                                                 */
/*              /api/mongo/users                   */
/*                                                 */
/////////////////////////////////////////////////////

router.get("/auth", auth, authRouter);
router.use('/register', register);
router.use('/login', login);
router.use('/logout', auth, logout);

module.exports = router;
