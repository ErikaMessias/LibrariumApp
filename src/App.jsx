import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Home from "./Components/Home/Home";
import Catalogo from "./Components/Catalogo/Catalogo";
import Reserva from "./Components/Reserva/Reserva";
import Devolucao from "./Components/Devolucao/Devolucao"; 
import Perfil from "./Components/Perfil/Perfil";
import "./App.css"; 

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/reserva" element={<Reserva />} />
        <Route path="/devolucao" element={<Devolucao />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </div>
  );
}

export default App;
