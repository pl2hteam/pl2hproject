const express = require('express');
const router = express.Router();
const { User } = require("../../../schemas/User");

/////////////////////////////////////////////////////
/*                                                 */
/*         /api/mongo/users/sns/getMongo           */
/*                                                 */
/////////////////////////////////////////////////////

router.post("/", (req, res) => {
  User.find({ "email": req.body.userInfo.email })
    .exec((err, user) => {
      if (err) return res.status(400).send(err)
      res.status(200).json({ success: true, user })
    })
});

module.exports = router;