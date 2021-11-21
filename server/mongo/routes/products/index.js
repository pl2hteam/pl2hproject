const express = require("express");
const router = express.Router();
const uploadProduct = require("./productInfo/uploadproduct");
const uploadImage = require("./imgs/uploadimage");
const getProducts = require("./productInfo/getproduct");
const productitem = require("./productInfo/productitem");
const saveComment = require('./comments/saveComment');
const getComments = require('./comments/getComments');
const uploadFiles = require('./videos/uploadfiles');
const thumbnail = require("./videos/thumbnail");

/////////////////////////////////////////////////////
/*                                                 */
/*              /api/mongo/product                 */
/*                                                 */
/////////////////////////////////////////////////////

/* shop 메인 */
router.use("/getProducts", getProducts);

/* 상품 등록 */
router.use("/uploadProduct", uploadProduct);


router.use("/uploadImage", uploadImage);  // 이미지
router.use('/uploadfiles', uploadFiles);  // 비디오
router.use('/thumbnail', thumbnail);      // 썸네일

/* 상품 상세 */
router.use("/products_by_id", productitem);

/* 댓글 */
router.use("/saveComment", saveComment);
router.use("/getComments", getComments);

module.exports = router;
