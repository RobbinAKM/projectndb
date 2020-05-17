const express = require('express');
const app = express();
const path= require('path');
const router = express.Router();
const bodyParser = require('body-parser')
var mid= require('./middleware/selenium.js');

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/view/form.html'));
});


router.post('/', function (req, res) {
  console.log(req.body);
  mid.runSelenium(req.body.name,req.body.namefurikana,req.body.phone,req.body.email,req.body.year,req.body.month,req.body.day,req.body.gender,req.body.occupation);
  res.sendStatus(200)
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/',router);
app.use(express.static(__dirname+'/view'));
app.use(express.static(__dirname+'/public'));


// listen on port 3000
app.listen(3000, function () {
  console.log('Express app listening on port 3000');
});
