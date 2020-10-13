const fs = require("fs");

const requestHandler = (req,res) => {
    const url = req.url;
    const method = req.method;
    res.write("hello");
}

module.exports = requestHandler;