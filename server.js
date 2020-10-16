const http = require("http");
// const routes = require("./routes");
const express = require("express");

const app = express();

app.use((req,res,next)=>{
    console.log("in middleware")
    next();
})

app.use((req,res,next) => {
    console.log("In other middleware")
})

app.listen(8000)

