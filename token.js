function Token(req,res,next) {
    console.log("Creating Token...");

    req.token = ture;
    next();
}


module.exports = Token;