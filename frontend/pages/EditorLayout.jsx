import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Editor } from "../src/components";
import { Output } from "../src/components";
import OutputContext from "../src/context/OutputContext";

function EditorLayout() {
  const {defaultCode, setDefaultCode }=useContext(OutputContext);
  const { language } = useParams();
  const defaultSelector={
   java :`// Online Java Compiler
   // Use this editor to write, compile and run your Java code online
   
   
  public class Main{
       public static void main(String[] args) {
           System.out.println("Hello, World!");
       }
   }`,
   c:`// Online C compiler to run C program online

   #include <stdio.h>
   
   int main() {
       // Write C code here
       printf("Hello world");
   
       return 0;
   }`,
   cpp:`// Online C++ compiler to run C++ program online
   #include <iostream>
   
   int main() {
       // Write C++ code here
       std::cout << "Hello world!";
   
       return 0;
   }`
  }
 
 
  
 useEffect(()=>{
  setDefaultCode(defaultSelector[language]);
 },[language])


  return (
    <div className="flex ">
    <div className="w-full" >
      <Editor
        defaultLanguage={language}
        fileExtension={"java"}
      />
    </div>
      <div className="w-full"  >
      <Output/>
      </div>
      </div>
  );
}

export default EditorLayout;
