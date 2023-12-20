import { Outlet } from "react-router";
import "./App.css";
import { Editor, Output } from "./components";
import Header from "./components/header/Header";

function App() {
  return (
    <>
    <div>
      <Header/>
    </div>
    <div className="flex justify-center">
      <div className="w-full">
     <Outlet/>
      </div>
    </div>
    
    
 </>
  );
}

export default App;
