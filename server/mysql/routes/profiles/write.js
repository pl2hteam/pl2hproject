const express = require("express");
const router = express.Router();

const { Profile } = require('../../models');


router.post('/', async (req, res, next) => { // POST /post
  try {
    const fullProfile = await Profile.create({
      id: req.body.id,
      content: req.body.content
    });

    res.status(201).json({ success: true, fullProfile });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete('/delete/:id',async(req,res,next)=>{
  try{
    const id=req.params.id
    console.log(id,31314141)
    await Profile.destroy({
      where :{
        id: id,
      },
    }).then(data=>console.log(data))
    res.status(200).json({ success: true });
  } catch (err) {
    console.error(error);
    next(error);
  }
})

module.exports = router;
