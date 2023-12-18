import { useState } from 'react'
import OutputContext from './OutputContext'

const outputContextProvider=({children})=>{
    const [output,setOutput]=useState(null);
   return (
    <OutputContext.Provider value={{output,setOutput}}>
    {children}
</OutputContext.Provider>
   )
}

export default outputContextProvider;