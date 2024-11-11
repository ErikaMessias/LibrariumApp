import React, { useState, useEffect, useRef } from "react";
import { RiMenu3Line } from "react-icons/ri";
import "./Catalogo.css";

const Catalogo = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [livros, setLivros] = useState([
    {
      id: 1,
      titulo: "O Senhor dos Anéis",
      autor: "J.R.R. Tolkien",
      imagem: "../../../public/senhordosaneis.jpeg",
      descricao: "Uma épica história de fantasia que segue a jornada de Frodo Bolseiro.",
      disponibilidade: true, // Disponível
    },
    {
      id: 2,
      titulo: "Principe Cruel",
      autor: "Holly Black",
      imagem: "../../../public/principe_cruel.jpg",
      descricao: "Príncipe Cruel acompanha Jude, uma mortal em um reino fae traiçoeiro.",
      disponibilidade: false, // Indisponível
    },
    {
      id: 3,
      titulo: "Biblioteca da Meia Noite",
      autor: "Matt Haig",
      imagem: "../../../public/biblioteca_meianoite.jpeg",
      descricao: "*A Biblioteca da Meia-Noite* explora escolhas de vida e arrependimentos.",
      disponibilidade: true, // Disponível
    },
    {
      id: 4,
      titulo: "Duna",
      autor: "Frank Patrick Herbert",
      imagem: "../../../public/duna.jpg",
      descricao: "Duna narra a luta pelo controle de Arrakis e poder político.",
      disponibilidade: false, // Indisponível
    },
  ]);

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
        <h2 className="logo">Librarium</h2>
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

      {/* Conteúdo principal */}
      <div className="main-content">
        <h1>Catálogo de Livros</h1>
        <p>Explore nossos livros e faça sua reserva.</p>

        {/* Lista de livros */}
        <div className="livros-lista">
          {livros.map((livro) => (
            <div
              key={livro.id}
              className={`livro-item ${!livro.disponibilidade ? "indisponivel" : ""}`}
            >
              {/* Linha verde/vermelha indicando disponibilidade */}
              <div
                className={`livro-status ${livro.disponibilidade ? "disponivel" : "indisponivel"}`}
              ></div>
              <img src={livro.imagem} alt={livro.titulo} className="livro-imagem" />
              <h3>{livro.titulo}</h3>
              <p>{livro.autor}</p>
              <p className="livro-descricao">{livro.descricao}</p>
              <a
                href={`/reserva`}  
                className="reserva-button"
                style={{ pointerEvents: livro.disponibilidade ? "auto" : "none" }}  // Desabilita o link se o livro estiver indisponível
              >
                Reservar
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalogo;
