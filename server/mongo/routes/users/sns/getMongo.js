const express = require('express');
const router = express.Router();
const { User } = require("../../../schemas/User");

/////////////////////////////////////////////////////
/*                                                 */
/*         /api/mongo/users/sns/getMongo           */
/*                                                 */
/////////////////////////////////////////////////////

router.post("/", (req, res) => {
  console.log(2222222222222222);
  console.log(req.body);
  console.log(333333333333333);

  User.find({ "email": req.user.email })
    .exec((err, user) => {
      if (err) return res.status(400).send(err)
      console.log("이곳해결");
      console.log(user);
      res.status(200).json({ success: true, user })
    })
});

module.exports = router;