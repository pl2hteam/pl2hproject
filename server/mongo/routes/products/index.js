const express = require("express");
const router = express.Router();
const { Product } = require("../../schemas/Product");
const multer = require("multer");
const path = require("path");
const uploadProduct = require("./uploadproduct");
const uploadImage = require("./imgs/uploadimage");
const getProducts = require("./getproduct");
const productitem = require("./productitem");
const uploadVideo = require('./videos');
const subscribeNumber = require('./videos');
const saveComment = require('./comments/saveComment');
const getComments = require('./comments/getComments');

/////////////////////////////////////////////////////
/*                                                 */
/*              /api/mongo/product                 */
/*                                                 */
/////////////////////////////////////////////////////

/* shop 메인 */
router.use("/getProducts", getProducts);

/* 상품 등록 */
router.use("/uploadProduct", uploadProduct);
router.use("/uploadImage", uploadImage);
router.use("/video", uploadVideo);

/* 상품 상세 */
router.use("/products_by_id", productitem);
router.use("/subscribeNumber", subscribeNumber);

/* 댓글 */
router.use("/saveComment", saveComment);
router.use("/getComments", getComments);

module.exports = router;
