import React from 'react'
import {NavLink} from 'react-router-dom'

function Header() {
  return (
  <div className='flex justify-between  p-5 border-b border-gray-500' >
    <div>
      <NavLink to="/">
      <span>Compile&Run</span>
      </NavLink>
    </div>
    <div  className='flex gap-5'>
       <div >
        <NavLink  to="/compiler/c">
          C Compiler
        </NavLink>
       </div>
       <div>
      <NavLink to="/compiler/java" >
      Java Compiler
      </NavLink>
       </div>
       <div>
       <NavLink to="/compiler/cpp" >
       CPP Compiler
       </NavLink>
       </div>
    </div>
  </div>
  )
}

export default Header