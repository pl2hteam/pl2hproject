const express = require("express");
const router = express.Router();
const { User } = require("../../../schemas/User");
const { Product } = require("../../../schemas/Product");

/////////////////////////////////////////////////////
/*                                                 */
/*        /api/mongo/users/removeFromCart          */
/*                                                 */
/////////////////////////////////////////////////////

router.get("/", (req, res) => {
    User.findOneAndUpdate(
      { email: req.user.email },
      {
        $pull: { cart: { id: req.query._id } },
      },
      { new: true },
      (err, userInfo) => {
        let cart = userInfo.cart;
        let array = cart.map((item) => {
          return item.id;
        });
  
        Product.find({ _id: { $in: array } })
          .populate("seller")
          .exec((err, cartDetail) => {
            return res.status(200).json({
              cartDetail,
              cart,
            });
          });
      }
    );
});

module.exports = router;