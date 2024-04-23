var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// router.post("/add",(req,res,next) => {
//   const {name,email,age} = req.body;
  
// })
module.exports = router;
