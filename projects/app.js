const express= require("express");
const path=require("path")
const mysql=require("mysql");
const app=express();

const publicDirectory=path.join(__dirname, '/public');

app.use(express.static(publicDirectory));


app.listen(1999,()=>{
    console.log("server started succefully at port number 2002");
})