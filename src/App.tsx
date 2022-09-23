import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Pokemons from "./pages/Pokemons";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <header className="bg-blue-500">
        <div className="  container mx-auto h-10 flex items-center">
          <h1 id="app_name" className="text-xl font-bold mx-3 text-white">Pokemons</h1>
        </div>
      </header>

      <main className="container mx-auto">
        <Pokemons />
      </main>

      <Footer/>
    </div>
  );
}

export default App;
