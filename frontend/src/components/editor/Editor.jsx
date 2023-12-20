import React, { useContext, useEffect, useState } from "react";
import { Editor as MonacoEditor } from "@monaco-editor/react";
import OutputContext from "../../context/OutputContext";
function Editor({ defaultLanguage, fileExtension }) {
  const { setOutput, defaultCode, input, setLoading } =
    useContext(OutputContext);
  const [code, setCode] = useState(defaultCode);
  const [key, setKey] = useState(0);

  const handleEditorChange = (value) => {
    setCode(value);
  };
  const handleRun = async () => {
    setLoading(true);
    try {
      var rowData = await fetch("http://localhost:3000/api/code-execution", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: code,
          language: defaultLanguage,
          input: input,
        }),
      });
      var Data = await rowData.json();
      setOutput(Data);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setKey((prev) => prev + 1);
    setCode(defaultCode);
  }, [defaultCode]);

  return (
    <>
      <div className=" flex justify-between items-center">
        <div className="p-5">
          <span>Main.{defaultLanguage}</span>
        </div>
        <div className="">
          <button
            onClick={handleRun}
            className="rounded-md px-5 py-2  overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">
              Run
            </span>
          </button>
        </div>
      </div>
      <div className="border border-gray-500  p-5">
        <MonacoEditor
          key={key}
          height="80vh"
          width="auto"
          defaultValue={defaultCode}
          defaultLanguage={defaultLanguage}
          onChange={handleEditorChange}
          options={{
            minimap: {
              enabled: false,
            },
          }}
        />
      </div>
    </>
  );
}

export default Editor;
