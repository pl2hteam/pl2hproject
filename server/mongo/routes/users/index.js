const express = require("express");
const router = express.Router();
const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const authRouter = require("./auth");
const cart = require("./cart");
const payment = require("./payment");

const { auth } = require("../../middleware/auth");

/////////////////////////////////////////////////////
/*                                                 */
/*              /api/mongo/users                   */
/*                                                 */
/////////////////////////////////////////////////////

router.use("/auth", auth, authRouter);
router.use("/register", register);
router.use("/login", login);
router.use("/logout", auth, logout);
router.use("/cart", auth, cart);
router.use("/payment", payment);

module.exports = router;
