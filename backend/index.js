const express = require("express");
require("dotenv").config();
const cors = require("cors");
const compiler = require("compilex");
const bodyParser = require("body-parser");
const deleteFilesInDirectory = require("./deleteFiles");
var options = { stats: true };
compiler.init(options);
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/code-execution", (req, res) => {
  const { code, language, input } = req.body;
  const error = { err: "error you are trying something wrong" };
  let isSend = false;
  if (language === "java" && input === "") {
    let envData = { OS: "windows", options: { timeout: 2000 } };
    try {
      compiler.compileJava(envData, code, function (data) {
        if (data.output) {
          res.send(JSON.stringify(data.output));
          isSend = true;
        } else if (data.error) {
          res.send(JSON.stringify(data.error));
          isSend = true;
        }
      });
      setTimeout(() => {
        if (!isSend) res.send(JSON.stringify(error.err));
      }, 2500);
    } catch (error) {
      console.log(error);
    }

  
  } else if (language === "java" && input != "") {
    let envData = { OS: "windows", options: { timeout: 4000 } };
    let isSend = false;

   try {
    compiler.compileJavaWithInput(envData, code, input, function (data) {
      if (data.output) {
        res.send(JSON.stringify(data.output));
        isSend = true;
      } else if (data.error) {
        res.send(JSON.stringify(data.error));
        isSend = true;
      }
    });
    setTimeout(() => {
      if (!isSend) res.send(JSON.stringify(error.err));
    }, 2000);
   } catch (error) {
     console.log(error);
   }
  } else if ((language === "c" || language === "cpp") && input === "") {
    let envData = { OS: "windows", cmd: "g++", options: { timeout: 4000 } };
    let isSend = false;
    try {
      compiler.compileCPP(envData, code, function (data) {
        if (data.output) {
          res.send(JSON.stringify(data.output));
          isSend = true;
        } else if (data.error) {
          res.send(JSON.stringify(data.error));
          isSend = true;
        }
      });
      setTimeout(() => {
        if (!isSend) res.send(JSON.stringify(error.err));
      }, 2000);
    } catch (error) {
       console.log(error);
    }
  } else if ((language === "c" || language === "cpp") && input != "") {
    let envData = { OS: "windows", cmd: "g++", options: { timeout: 4000 } };
    let isSend = false;
    try {
      compiler.compileCPPWithInput(envData, code, input, function (data) {
        if (data.output) {
          res.send(JSON.stringify(data.output));
          isSend = true;
        } else if (data.error) {
          res.send(JSON.stringify(data.error));
          isSend = true;
        }
      });
      setTimeout(() => {
        if (!isSend) res.send(JSON.stringify(error.err));
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  }


  setTimeout(() => {
    deleteFilesInDirectory("./temp");
  }, 4000);
});

app.listen(process.env.PORT, () => {
  console.log("App is running");
});
