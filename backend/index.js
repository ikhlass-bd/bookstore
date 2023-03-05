const mongoose=require("mongoose")
const express=require("express")
const app=express()
const catRoutes=require("./routes/category.routes")
const bookRoutes=require("./routes/book.routes")
const userroutes=require( "./routes/user.routes" )


app.use(json())//parser Ips données json
app.use("/categories",catRoutes)
app.use("/books", bookRoutes)
app.use("/users",userroutes)






require("dotenv").config()

mongoose.connect(process.env.MONGO_URL).then(result=>
    app.listen(process.env.PORT,hostname=>{
    console.log("server is running ...")})
    
    ).catch(error=>console.log(error))
    





try {
 mongoose.connect(process.env.MONGO_URL)  //se connecter à BD
 app.listen(process.env.PORT)
console.log("server is running ...")
}catch (error){
    console. log(error)
    }


