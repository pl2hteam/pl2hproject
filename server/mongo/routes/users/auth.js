const express = require('express');
const router = express.Router();

/////////////////////////////////////////////////////
/*                                                 */
/*            /api/mongo/users/auth                */
/*                                                 */
/////////////////////////////////////////////////////

router.get("/", (req, res) => {
  console.log(11111111111111111);
  res.status(200).json({
      _id: req.user._id,
      isAdmin: req.user.role === 0 ? false : true,
      isAuth: true,
      email: req.user.email,
      name: req.user.name,
      lastname: req.user.lastname,
      role: req.user.role,
      image: req.user.image,
  });
});

module.exports = router;