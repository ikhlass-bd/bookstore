const mongoose=require("mongoose")
const  bookSchema=new mongoose.Schema({
    name : {type:String,required:true},
    description:{type:String,required:true},
    isbn:{type:String,required:true},
    auteur:{type:String,required:true},
    editeur:{type:String,required:true},
    date_publication:{type:String,default:Date.now()},
    image:{type:String},
    category:{
        type:mongoose.Types.ObjectId,
        Ref:"Category"
    } 
})

const Book=mongoose.model("Book",bookSchema)
module.exports=Book