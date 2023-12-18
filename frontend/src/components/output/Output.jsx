import React, { useContext, useState } from 'react'
import OutputContext from '../../context/OutputContext';

function Output() {
  const {output}=useContext(OutputContext);
  return (
  <div className='m-5' >
   <div className='m-5' >
   <span>Output</span>
   </div>
   <div>
   <span>{output}</span>
   </div>
  </div>
  )
}

export default Output