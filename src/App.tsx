import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Pokemons from "./pages/Pokemons";

function App() {
  return (
    <div className="">
      <header className="bg-blue-500">
        <div className="  container mx-auto h-10 flex items-center">
          <h1 className="text-xl font-bold mx-3 text-white">Pokemons</h1>
        </div>
      </header>

      <main className="container mx-auto">
        <Pokemons />
      </main>

      <footer className="bg-blue-500">
        <div className="  container mx-auto h-10 flex items-center">
          <span className="text-xl font-bold mx-3 text-white">Zakaria Aarab</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
