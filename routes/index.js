var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
const userModel = require('../schemas/userSchema');
var dburl="mongodb+srv://vivek:Welcome2669@cluster0.xcpkve3.mongodb.net/diarymanager"
mongoose.connect(dburl)

/* GET home page. */
router.get('/',async function(req, res) {
  data=await userModel.find()
  res.status(200).send(data)
});

router.post("/",async(req,res)=>{
  try {
    await userModel.create(req.body)
    // console.log(req.body)
    data=await userModel.find()
    res.status(200).send({data:data})
  } catch (error) {
    res.status(400).send("Error")
  }
})

router.delete("/:id",async(req,res)=>{
  var {id}=req.params;
  try {
    console.log("id.................",id)
    await userModel.deleteOne({id:id})
    data=await userModel.find()
    // console.log("after deleted", data)
    res.status(200).send({data:data})
  } catch (error) {
    res.status(400).send("Error")
  }
})
module.exports = router;
