import { useState, useEffect, useRef } from "react";
import { RiStarLine, RiTimeLine, RiUser3Line, RiMenu3Line } from "react-icons/ri"; 
import { Link } from "react-router-dom"; 
import "./Home.css";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="home-container">
      {/* Menu Superior */}
      <div className="menu-superior">
        <h2 className="menu-title">Librarium</h2> 
        <RiMenu3Line className="menu-icon" onClick={toggleMenu} />
        {menuOpen && (
          <div className="menu-dropdown" ref={dropdownRef}>
            <a href="/">Menu</a>
            <a href="/catalogo">Explorar Catálogo</a>
            <a href="/reserva">Fazer Reserva</a>
            <a href="/devolucao">Devolução</a>
            <a href="/perfil">Perfil</a>
            <a href="/login">Sair</a>
          </div>
        )}
      </div>

      <div className="main-content">
        <h1 className="main-title">Librarium</h1> 
        <p>Sua plataforma de livros</p>

        <div className="info-section">
          <div className="info-item">
            <RiStarLine className="info-icon" />
            <h3>Avaliações</h3>
            <p>Leia opiniões de outros usuários e faça escolhas informadas.</p>
          </div>
          <div className="info-item">
            <RiTimeLine className="info-icon" />
            <h3>Tempo</h3>
            <p>Reserve e devolva livros em minutos, sem complicações.</p>
          </div>
          <div className="info-item">
            <RiUser3Line className="info-icon" />
            <h3>Facilidade de Uso</h3>
            <p>Interface amigável para uma experiência simples e rápida.</p>
          </div>
        </div>

        <div className="button-group">
          <button className="explore-button">
            <Link to="/catalogo">Explorar Catálogo</Link>
          </button>
          <button className="reserve-button">
            <Link to="/reserva">Fazer Reserva</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
