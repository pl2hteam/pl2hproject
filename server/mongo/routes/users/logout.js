const express = require('express');
const router = express.Router();
const { User } = require("../../schemas/User");

/////////////////////////////////////////////////////
/*                                                 */
/*           /api/mongo/users/logout               */
/*                                                 */
/////////////////////////////////////////////////////

router.get("/", (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: "", tokenExp: "" }, (err, doc) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).send({
          success: true
      });
  });
});

module.exports = router;