var express = require("express");

var router = express.Router();


//index path
router.get("/", function(req,res){
    
    res.render("home/");
});

router.get("/blog", function(req,res){
    
    res.render("home/blog");
});


//return the route
module.exports = router;