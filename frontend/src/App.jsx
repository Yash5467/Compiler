import "./App.css";
import { Editor, Output } from "./components";

function App() {
  return (
    <div className="flex justify-center">
      <div className="w-full">
      <Editor
        defaultValue={`// Online Java Compiler
        // Use this editor to write, compile and run your Java code online
        
        class HelloWorld {
            public static void main(String[] args) {
                System.out.println("Hello, World!");
            }
        }`}
        defaultLanguage="java"
        fileExtension={"java"}
      />
      </div>
      <div className="w-full" >
      <Output/>
      </div>
    </div>
  );
}

export default App;
