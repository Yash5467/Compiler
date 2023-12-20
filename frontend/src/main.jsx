import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {EditorLayout,Home} from '../pages/index.js'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import './index.css'
import OutputContextProvider  from './context/OutputContextProvider.jsx'
const routes=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/compiler/:language",
        element:<EditorLayout/>
      }
    ]
  }
]

)

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <OutputContextProvider>
    <RouterProvider router={routes} >
 
 <App />

 </RouterProvider>

    </OutputContextProvider>
    
   

)
