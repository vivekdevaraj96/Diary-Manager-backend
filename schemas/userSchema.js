var mongoose=require('mongoose');

let userSchema=new mongoose.Schema({
    id:{type:Number},
    title:{type:String},
    Date:{type:String},
    start:{type:String},
    end:{type:String},
    location:{type:String},
    allDay:{type:Boolean},
    startStr:{type:String},
    endStr:{type:String}
})

let userModel=mongoose.model("diarymanagerdatas",userSchema)

module.exports=userModel;