import { useState } from 'react'
import OutputContext from './OutputContext'

const outputContextProvider=({children})=>{
    const [output,setOutput]=useState(null);
    const [defaultCode,setDefaultCode]=useState("");
    const [input,setInput]=useState("");
   return (
    <OutputContext.Provider value={{output,setOutput,defaultCode,setDefaultCode,input,setInput}}>
    {children}
</OutputContext.Provider>
   )
}

export default outputContextProvider;