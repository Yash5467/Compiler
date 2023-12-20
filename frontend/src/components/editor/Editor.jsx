import React, { useContext, useEffect, useState } from "react";
import { Editor as MonacoEditor } from "@monaco-editor/react";
import OutputContext from "../../context/OutputContext";
function Editor({  defaultLanguage, fileExtension }) {
  const {  setOutput,defaultCode,input } = useContext(OutputContext);
  const [code, setCode] = useState(defaultCode);
  const [key,setKey]=useState(0);

  const handleEditorChange = (value) => {
    setCode(value);
  };
  const handleRun = async () => {
    var rowData = await fetch("http://localhost:3000/api/code-execution", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: code,
        language: defaultLanguage,
        input:input
      }),
    });
    var Data = await rowData.json();
    setOutput(Data);
    console.log(Data);
  };


  useEffect(()=>{
    setKey((prev)=>prev+1);
    setCode(defaultCode);
  },[defaultCode])

  return (
    <>
      <div className=" flex justify-between">
        <div className="p-5">
          <span>Main.{fileExtension}</span>
        </div>
        <div className="p-5">
          <button onClick={handleRun}>Run</button>
        </div>
      </div>
      <div className="border border-gray-500  p-5">
        <MonacoEditor
        key={key}
          height="90vh"
          defaultValue={defaultCode}
          defaultLanguage={defaultLanguage}
          onChange={handleEditorChange}
           options={{minimap:{
            enabled:false
           }}}
        />
      </div>
    </>
  );
}

export default Editor;
