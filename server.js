const express = require("express");
const app = express();
var bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", function(request, response) {
    response.sendFile(__dirname + "/client/dist/index.html");
  });

  app.post('/upload_json', (req, res) => {
     console.log(req.body)
     

    res.end(result)
});





  app.listen(3000,()=>{
    console.log("Server running on port 3000");
   });