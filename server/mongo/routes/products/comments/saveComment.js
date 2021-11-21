const express = require("express");
const router = express.Router();

const { Comment } = require("../../../schemas/Comment");

/////////////////////////////////////////////////////
/*                                                 */
/*         /api/mongo/product/saveComment          */
/*                                                 */
/////////////////////////////////////////////////////

router.post("/", (req, res) => {
  const comment = new Comment(req.body)
  console.log(req.body);
  
  comment.save((err, comment) => {
      if (err) return res.json({ success: false, err })

      Comment.find({ '_id': comment._id })
          .populate('writer')
          .exec((err, result) => {
              if (err) return res.json({ success: false, err })
              return res.status(200).json({ success: true, result })
          })
  })
})

module.exports = router;