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
  const { code, language ,input} = req.body;
  if (language === "java" && input==="") {
    var envData = { OS: "windows",options:{timeout:1000} };
    compiler.compileJava(envData, code, function (data) {
      if (data.output) res.send(JSON.stringify(data.output));
      else if(data.error) res.send(JSON.stringify(data.error))
      else res.send(JSON.stringify({error:"error"}));
    });

    setTimeout(()=>{
      
     deleteFilesInDirectory("./temp");
    },4000)
  } 
  else if(language==="java" && input!="")
  {
    var envData = { OS: "windows",options:{timeout:1000} };
    compiler.compileJavaWithInput(envData,code,input,function(data){
            if(data.output) res.send(JSON.stringify(data.output));
            res.send(JSON.stringify(data.error));
    })

  }
});

app.listen(process.env.PORT, () => {
  console.log("App is running");
});
