const express = require("express");
const router = express.Router();
const  {Post} = require("../../models");
router.post('/',async (req, res, next) => {
  try {
    // const user =res.locals.user;
    
    const fullPost = await Post.findAll({ 
   
    
  
  });
  
    res.status(201).json({success: true,fullPost});
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
