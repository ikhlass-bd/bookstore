const Book = require("../models/Book")
const Category=require("../models/Category")

const getAllBooks=async()=>{
    return await Book.find() //.populate("Category")
}

const createBook=async(b)=>{
    return await Book.create(b)
}

const getBookbyId = async(id)=>{
    return await Book.findById(id)
}

const deleteBookById=async(id)=>{
    return await Book.findByIdAndDelete(id)
}

const updateBook =async(b)=>{
    return await Book.findByIdAndUpdate(b._id,b)
}

const getAllCategory=async()=>{
    return await Category.find()
}

const createCategory =async(c)=>{
    return await Category.create(c)
}

const deleteCategorybyId=async(id)=>
{
    return await Category.findByIdAndDelete(id)
}


module.exports={
    deleteCategorybyId,
    createCategory,
    getAllCategory,
    updateBook,
    deleteBookById,
    getBookbyId ,
    createBook,
    getAllBooks
}