var express = require('express');
var router = express.Router();
const path= require('path');

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/view/form.html'));
});


router.get('/hi',function(req,res){
  res.sendFile(path.join(__dirname+'/view/hi.html'));
});

module.exports = router;
