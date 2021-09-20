"use strict";
const AuthorModel=require("../models/Author.model")

let authorController=(req,res)=>{
 AuthorModel.find().then (books=>{
     res.json(books);
 })
}

module.exports=authorController
// module.exports=getAuthorController
