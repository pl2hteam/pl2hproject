const express = require("express");
const router = express.Router();

const { Comment } = require("../../../schemas/Comment");

/////////////////////////////////////////////////////
/*                                                 */
/*          /api/mongo/product/getComments         */
/*                                                 */
/////////////////////////////////////////////////////

router.post("/", (req, res) => {
  Comment.find({ "postId": req.body.postId })
      .populate('writer')
      .exec((err, comment) => {
          if (err) return res.status(400).send(err)
          res.status(200).json({ success: true, comment })
      })
});

module.exports = router;