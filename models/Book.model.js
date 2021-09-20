'use strict';
const mongoose=require("mongoose");
//title
//description
//status
//email
const bookSchema= new mongoose.Schema({
    title:String,
    description:String,
    status:String,
    email:String
})

const bookModel=mongoose.model('book',bookSchema);


module.exports=bookSchema;