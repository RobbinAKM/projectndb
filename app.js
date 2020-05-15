const express = require('express');
const app = express();
const path= require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/view/form.html'));
});

router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/view/about.html'));
});


app.use('/',router);
app.use(express.static(__dirname+'/view'));
app.use(express.static(__dirname+'/public'));


// listen on port 3000
app.listen(3000, function () {
  console.log('Express app listening on port 3000');
});
