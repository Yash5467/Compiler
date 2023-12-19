import React, { useContext, useState } from "react";
import { Editor as MonacoEditor } from "@monaco-editor/react";
import OutputContext from "../../context/OutputContext";
function Editor({ defaultValue, defaultLanguage, fileExtension }) {
  const [code, setCode] = useState(defaultValue);
  const { output, setOutput } = useContext(OutputContext);

  const handleEditorChange = (value) => {
    setCode(value);
  };
  const handleRun = async () => {
    console.log(code);
    var rowData = await fetch("http://localhost:3000/api/code-execution", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: code,
        language: defaultLanguage,
      }),
    });
    var jsonData = await rowData.json();
    setOutput(jsonData);
  };
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
          height="90vh"
          defaultValue={defaultValue}
          defaultLanguage={defaultLanguage}
          onChange={handleEditorChange}
        />
      </div>
    </>
  );
}

export default Editor;
