import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Pokemons from "./pages/Pokemons";

function App() { 
  return (
    <div className="container mx-auto"> 
        <Pokemons /> 
    </div>
  );
}

export default App;
