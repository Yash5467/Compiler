const express = require("express");
require("dotenv").config();
const cors = require("cors");
const compiler = require("compilex");
const bodyParser = require("body-parser");
const deleteFilesInDirectory=require("./deleteFiles")
var options = { stats: true };
compiler.init(options);
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/code-execution", (req, res) => {
  const { code, language } = req.body;
  if (language === "java") {
    var envData = { OS: "windows",options:{timeout:1000} };
    compiler.compileJava(envData, code, function (data) {
      if (data.output) res.send(JSON.stringify(data.output));
      else res.send(JSON.stringify(data.error))
    });

    setTimeout(()=>{
      
     deleteFilesInDirectory("./temp");
    },4000)
  } 
});

app.listen(process.env.PORT, () => {
  console.log("App is running");
});
