import React, { useContext, useState } from "react";
import OutputContext from "../../context/OutputContext";
import {Loader} from '../index'

function Output() {
  const { output ,setInput,input,loading} = useContext(OutputContext);
  return !loading? (
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
      <div className="m-3">
      <span>Input</span>
      </div>
     <div className="border border-gray-500 h-[30vh] overflow-hidden" >
        <textarea id="input" onChange={(e)=>setInput(e.target.value)} spellCheck="false" value={input}   className="w-full outline-none border-none p-3 resize-none "/> 
      </div>
      <div>

      </div>
     </div>
    </div>
  ):(
    <Loader/>
  )
}

export default Output;
