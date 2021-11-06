const express = require("express");
const router = express.Router();
const { Product } = require("../../models/Product");
const multer = require("multer");
const path = require('path');

// const { auth } = require("../middleware/auth");
const box = multer.diskStorage({
  destination(req, file, done) {
    done(null, 'uploads/img/');
  },
  filename(req, file, done) { // 제로초.png
    const ext = path.extname(file.originalname); // 확장자 추출(.png)
    const basename = path.basename(file.originalname, ext); // 제로초
    done(null, basename + '_' + new Date().getTime() + ext); // 제로초15184712891.png
  },
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

router.post("/uploadProduct", (req, res) => {
  console.log(req.body);
  //save all the data we got from the client into the DB
  const product = new Product(req.body);

  product.save(req, res, err => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

router.post("/getProducts", (req, res) => {
  let order = req.body.order ? req.body.order : "desc";
  let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
  let limit = req.body.limit ? parseInt(req.body.limit) : 100;
  let skip = parseInt(req.body.skip);

  let findArgs = {};
  let term = req.body.searchTerm;

  for (let key in req.body.filters) {
    if (req.body.filters[key].length > 0) {
      if (key === "price") {
        findArgs[key] = {
          $gte: req.body.filters[key][0],
          $lte: req.body.filters[key][1],
        };
      } else {
        findArgs[key] = req.body.filters[key];
      }
    }
  }

  if (term) {
    Product.find(findArgs)
      .find({ $text: { $search: term } })
      .populate("seller")
      .sort([[sortBy, order]])
      .skip(skip)
      .limit(limit)
      .exec((err, products) => {
        if (err) return res.status(400).json({ success: false, err });
        res
          .status(200)
          .json({ success: true, products, postSize: products.length });
      });
  } else {
    Product.find(findArgs)
      .populate("seller")
      .sort([[sortBy, order]])
      .skip(skip)
      .limit(limit)
      .exec((err, products) => {
        if (err) return res.status(400).json({ success: false, err });
        res
          .status(200)
          .json({ success: true, products, postSize: products.length });
      });
  }
});

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