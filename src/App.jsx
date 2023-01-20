import React from "react";
import Forminput from "./Components/Forminput";
import List from "./Components/List";
import Footer from "./Components/Footer";
import {Data} from "./Components/Data";




function App() {

  return (
    <Data>
    <div className="App">
      <h1>To Do List </h1>
      <Forminput/>
      <List/>
      <Footer/>
      
    </div>
    </Data>
  )
}

export default App
