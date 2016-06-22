var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');
var shell = require('shelljs');
var token;
var str;

app.use(bodyParser.json({limit: '50mb'})); // support json encoded bodies
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/write', function (req, res) {
  var img = req.body.imgData

  var vibrance = req.body.vibrance
  var hue = req.body.hue
  var saturation = req.body.saturation
  var colourSampleRate = req.body.colourSampleRate

  var data = img.replace(/^data:image\/\w+;base64,/, "");
  var buf = new Buffer(data, 'base64');
  fs.writeFile('./Sever/image.png', buf, function(error) {
    if(error) {
      console.log("we have error")
    } else {
      console.log("call the script")
      console.log(colourSampleRate + " " + vibrance + " " + hue + " " + saturation);
      shell.exec('python colour.py image ' + colourSampleRate + " " + vibrance + " " + hue + " " + saturation, function(status, stdout, stderr) {
        console.log(status);
        console.log(stdout);
        console.log(stderr);
      });
    }
  });
})

app.post('/thickness', function (req, res) {
  var thickness = req.body.thickness
  console.log("thickness", thickness)
  res.send('POST request to the homepage');
});

app.post('/clarifai', function (req, res) {
    shell.exec('curl -X POST "https://api.clarifai.com/v1/token/"  -d "client_id=w0V2s70r2mWiEl7x0C9ure-LUFUp4j6699fndOOr"  -d "client_secret=qzsJUT7AoJMh_e21TRUaw4DPMGnOTfV1azJ9LlSR"  -d "grant_type=client_credentials"',
      function(status,stdout,stderr){
        token = JSON.parse(stdout)["access_token"]+'"';
        str = 'curl "https://api.clarifai.com/v1/tag/"  -F "model=general-v1.3"  -F "encoded_data=@/Users/Himel/GitHub/Colour-My-World/WebApp/Sever/result.png"  -H "Authorization: Bearer '+token;
        shell.exec(str,function(status,stdout,stderr){
          console.log(stdout);
          res.end(stdout);
        }); 
      }); 
});

app.post('/twitter', function (req, res) {
        console.log("message: " + req.body.message);
    shell.exec('python ./Sever/twitter.py ' +'"'+ req.body.message+'"', function(status, stdout, stderr) {
        console.log(stdout);
        res.end(stdout);
      });
});

app.post('/greyness', function (req, res) {
  var greyness = req.body.greyness
  console.log("greyness", greyness)

  res.send('POST request to the homepage');
});

app.post('/attributes', function (req, res) {
  var vibrance = req.body.vibrance
  var hue = req.body.hue
  var saturation = req.body.saturation
  var colourSampleRate = req.body.colourSampleRate

  console.log("vibrance", vibrance)
  console.log("hue", hue)
  console.log("saturation", saturation)
  console.log("colourSampleRate", colourSampleRate)

  shell.exec('python colour.py image ' + colourSampleRate + " " + vibrance + " " + hue + " " + saturation, function(status, stdout, stderr) {
    console.log(status);
    console.log(stdout);
    console.log(stderr);
  });
  res.send('POST request to the homepage');
});

app.get('/result', function (req, res) {
 // track if the result image existed
 fs.stat(__dirname + '/result.png', function(err, stat) {
     if(err == null) {
         res.send("done12")
     } else if(err.code == 'ENOENT') {
         // file does not exist
         res.send("not done");
     } else {
         console.log('Some other error: ', err.code);
     }
 });
});

app.post('/deleteImages', function(req, res) {
  fs.unlinkSync(__dirname + '/result.png');
  fs.unlinkSync(__dirname + '/image.png');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});