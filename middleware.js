const express = require('express');
const app = express();

const Token = require("./middleware/token");
const Validation = require("./middleware/validation");

app.use()

const middleware = [Token,Validation]

app.get("/profile", middleware, (req,res) => {
    console.log("User logged");
    res.send("<h1>Success</h1>");
});


const PORT =  process.env.PORT || 3002;

app.listen(PORT);