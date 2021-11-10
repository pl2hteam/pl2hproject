const express = require("express");
const router = express.Router();
const { Product } = require("../../schemas/Product");
const multer = require("multer");
const path = require("path");
const uploadProduct = require("./uploadproduct");
const getProducts = require("./getproduct");
const productitem = require("./productitem");
const video = require("./videos");

/* 이미지 파일 이름 지정 */
const box = multer.diskStorage({
  destination(req, file, done) {
    done(null, "uploads/img/");
  },
  filename(req, file, done) {
    const ext = path.extname(file.originalname);
    const basename = path.basename(file.originalname, ext);
    done(null, basename + "_" + new Date().getTime() + ext);
  },
});

const upload = multer({ storage: box }).single("file");

/* 이미지 미리보기 */
router.post("/uploadImage", (req, res) => {
  upload(req, res, (err) => {
    if (err) return res.json({ success: false, err });
    return res.json({
      success: true,
      image: res.req.file.path,
      fileName: res.req.file.filename,
    });
  });
});

/* shop 목록 저장 */
router.use("/uploadProduct", uploadProduct);

/* shop 메인 */
router.use("/getProducts", getProducts);

/* video */
router.use("/video", video);

router.use("/products_by_id", productitem);

module.exports = router;
