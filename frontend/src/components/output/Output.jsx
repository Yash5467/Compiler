import React, { useContext, useState } from "react";
import OutputContext from "../../context/OutputContext";

function Output() {
  const { output ,setInput,input} = useContext(OutputContext);
  return (
    <div className="m-5">
     <div className="m-h-[40vh]" >
     <div className="m-5">
        <span>Output</span>
      </div>
      <div className="border p-3 border-gray-500 h-[40vh]" >
        <span>{output}</span>
      </div>
     </div>
     <div className="m-h-[40vh] my-5" >
      <div>
      <span>Input</span>
      </div>
     <div className="border border-gray-500 h-[30vh] overflow-hidden" >
        <textarea onChange={(e)=>setInput(e.target.value)} value={input}   className="w-full outline-none border-none p-3 resize-none "/> 
      </div>
      <div>

      </div>
     </div>
    </div>
  );
}

export default Output;
