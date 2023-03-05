const mongoose=require("mongoose")

const UserSchema = new mongoose.Schema({
    lName:{type:String,required:true}, 
    fName:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    Image:{type:String}
})

const User=mongoose.model("User",UserSchema)
module.exports=User
