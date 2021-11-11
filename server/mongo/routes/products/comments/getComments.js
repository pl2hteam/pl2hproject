const express = require("express");
const router = express.Router();

const { Comment } = require("../../../schemas/Comment");

/////////////////////////////////////////////////////
/*                                                 */
/*          /api/mongo/product/getComment          */
/*                                                 */
/////////////////////////////////////////////////////

router.post("/", (req, res) => {
  Comment.find({ "postId": req.body.videoId })
      .populate('writer')
      .exec((err, comments) => {
          if (err) return res.status(400).send(err)
          res.status(200).json({ success: true, comments })
      })
});

module.exports = router;