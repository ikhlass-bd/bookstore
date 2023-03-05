const express=require ("express")
const router=express.Router()
const catalController=require("../controllers/catalogue.controller")


router.route (prefix,"/book").get (catalController.getBooks)
                       .post (catalController.addBook)

router. route (prefix,"/books/:id").put(catalController.updateBook)
                                    .delete (catalController.deleteBook)
                                .get(catalController.getBook)
module.exports=router

