const express = require("express");

const router = express.Router();


router.use("/",(req,res,next) => {
    console.log("In other middleware")
    res.send("<h1>Hello</h1>")
});


module.exports = router;