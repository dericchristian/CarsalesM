const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());
 
app.use(cors());

app.get('/', function (req, res) {
  res.send("Hello From Server!");
})


app.post('/cars', function (req, res) {

  console.log(req.body);
  var fs = require('fs');
  var data = req.body;
  var cardata = JSON.stringify(data);

  fs.appendFile('output.txt', "\r\n" + cardata, function (err) {
    if (err) throw err;
    console.log('Saved to file!');
  });

})
  

app.listen(PORT, function (){
  console.log("Server running on localhost:" +PORT)
})
