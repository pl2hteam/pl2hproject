const express = require("express");
const router = express.Router();
const { User } = require("../../../schemas/User");

/////////////////////////////////////////////////////
/*                                                 */
/*          /api/mongo/users/addToCart             */
/*                                                 */
/////////////////////////////////////////////////////

router.get("/", (req, res) => {
  console.log(111111111111111111);
  console.log(req);
  console.log(11133333333333333333333);
    User.findOne({ email: req.user.email }, (err, userInfo) => {
      let duplicate = false;
  
      userInfo.cart.forEach((item) => {
        if (item.id == req.query.productId) {
          duplicate = true;
        }
      });
  
      if (duplicate) {
        User.findOneAndUpdate(
          { email: req.user.email, "cart.id": req.query.productId },
          { $inc: { "cart.$.quantity": 1 } },
          { new: true },
          (err, userInfo) => {
            if (err) return res.json({ success: false, err });
            res.status(200).json(userInfo.cart);
          }
        );
      } else {
        User.findOneAndUpdate(
          { email: req.user.email },
          {
            $push: {
              cart: {
                id: req.query.productId,
                quantity: 1,
                date: Date.now(),
              },
            },
          },
          { new: true },
          (err, userInfo) => {
            if (err) return res.json({ success: false, err });
            res.status(200).json(userInfo.cart);
          }
        );
      }
    });

});

module.exports = router;