const express = require("express");
const router = express.Router();
const { Product } = require("../../schemas/Product");
const multer = require("multer");
const path = require('path');
const uploadProduct = require('./uploadproduct');
const getProducts = require('./getproduct');

/* 이미지 파일 이름 지정 */
const box = multer.diskStorage({
  destination(req, file, done) {
    done(null, 'uploads/img/');
  },
  filename(req, file, done) {
    const ext = path.extname(file.originalname);
    const basename = path.basename(file.originalname, ext);
    done(null, basename + '_' + new Date().getTime() + ext);
  },

/* 현재 주석 풀면 오류 (이미지만 올라가는 기능) */
  // fileFilter(req, file, cb) {
  //   const ext = path.extname(file.originalname);
  //   if (ext !== ".jpg" || ext !== ".png") {
  //     // 위 확장자 이외의 파일을 업로드하면 오류문구 출력
  //     return cb(
  //       res.status(400).end("jpg와 png 파일만 업로드 할 수 있읍니다"),
  //       false
  //     );
  //   }
  //   cb(null, true);
  // },
  // limits: { fileSize: 20 * 1024 * 1024 }, // 20MB

},);

const upload = multer({ storage: box }).single("file");

/* 이미지 미리보기 */
router.post("/uploadImage", (req, res) => {
  upload(req, res, err => {
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



//?id=${pdnumber}&type=single
//id=12121212,121212,1212121   type=array
router.get("/products_by_id", (req, res) => {
  let type = req.query.type;
  let pdnumbers = req.query.id;

  console.log("req.query.id", req.query.id);

  if (type === "array") {
    let ids = req.query.id.split(",");
    pdnumbers = [];
    pdnumbers = ids.map((item) => {
      return item;
    });
  }

  console.log("pdnumbers", pdnumbers);

  //we need to find the product information that belong to product Id
  Product.find({ _id: { $in: pdnumbers } })
    .populate("seller")
    .exec((err, product) => {
      if (err) return res.status(400).send(err);
      return res.status(200).send(product);
    });
});

module.exports = router;
