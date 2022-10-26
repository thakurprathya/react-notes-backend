//in this file we have set connection from database
require("dotenv").config(); //including dotenv package will help in loading environment data into process.env
const mongoose= require("mongoose");
//providing database name reactNotesApp if not provide will add data in test database
const mongoURI= process.env.DATABASE;

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log(`Connected with Mongo Successfuly`);
    })
}

module.exports= connectToMongo; //exporting our function