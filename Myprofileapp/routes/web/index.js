var express =  require('express');

var router= express.Router();

//use home.js route
router.use("/", require('/home'));


//return the route
module.exports = router;
