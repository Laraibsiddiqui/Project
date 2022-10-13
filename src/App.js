import React, { useState, useEffect } from "react";
import './App.css'

import dice1 from "./Pictures/dice1.jpg";
import Home from "./Components/Header/Home";
import Fetch from "./Components/Fetch/Fetch";
import Form from "./Components/Form/Form";
import Box from "./Components/CHeckBoxx/Box";
import Ludo from "./Components/Ludo/Lodu";
import Dice from "./Components/Dice/Dice";

// import Header from "./Components/Facebook/Header";


const App = () => {



  return (

    <div className="App">

       

      {/* <Dice /> */}

      {/* <img src={dice1} /> */}


      {/* <Home /> */}
      <Form />
      {/* <Box /> */}
      {/* <Fetch /> */}
      {/* <Header /> */}
    </div>


  )
}

export default App;