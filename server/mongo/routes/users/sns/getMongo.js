const express = require('express');
const router = express.Router();
const { User } = require("../../../schemas/User");

/////////////////////////////////////////////////////
/*                                                 */
/*         /api/mongo/users/sns/getMongo           */
/*                                                 */
/////////////////////////////////////////////////////

router.get("/", (req, res) => {
  User.find({ "email": req.user.email })
    .exec((err, user) => {
      if (err) return res.status(400).send(err)
      res.status(200).json({ success: true, user })
    })
});

module.exports = router;