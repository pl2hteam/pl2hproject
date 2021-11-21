const express = require("express");
const router = express.Router();
const register = require("./log/register");
const login = require("./log/login");
const logout = require("./log/logout");
const authRouter = require("./log/auth");
const addToCart = require("./cart/addToCart");
const removeFromCart = require("./cart/removeFromCart");
const userCartInfo = require("./cart/userCartInfo");
const paymentSucces = require("./pay/paymentSucces");
const paymentgetHistory = require("./pay/getHistory");
const getMongo = require("./sns/getMongo");

const { auth } = require("../../middleware/auth");

/////////////////////////////////////////////////////
/*                                                 */
/*              /api/mongo/users                   */
/*                                                 */
/////////////////////////////////////////////////////

/* 사용자 정보 */
router.use("/auth", auth, authRouter);
router.use("/register", register);
router.use("/login", login);
router.use("/logout", auth, logout);

router.use("/sns/getMongo", getMongo);

/* 장바구니 */
router.use("/addToCart", addToCart);
router.use("/removeFromCart", removeFromCart);
router.use("/userCartInfo", userCartInfo);

/* 결제 */
router.use("/payment/successBuy", paymentSucces);
router.use("/payment/getHistory", paymentgetHistory);

module.exports = router;
