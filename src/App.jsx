import NavBar from "./Components/Navbar";
import { Navigate, Routes, Route } from "react-router-dom";
import Pokemon from "./Components/pokemon/personaje";
import { Home } from "./Components/home/home";
import PokemonDetails from "./Components/PokemonView/pokemon";
import "./App.css";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<PokemonDetails />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;