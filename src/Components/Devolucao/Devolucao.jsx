import React, { useState, useEffect, useRef } from "react";
import { RiMenu3Line } from "react-icons/ri";
import "./Devolucao.css";

const Devolucao = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [livros, setLivros] = useState([
    {
      id: 1,
      titulo: "O Senhor dos Anéis",
      autor: "J.R.R. Tolkien",
      imagem: "../../../public/senhordosaneis.jpeg",
    },
    {
      id: 2,
      titulo: "Principe Cruel",
      autor: "Holly Black",
      imagem: "../../../public/principe_cruel.jpg",
    },
    {
      id: 3,
      titulo: "Biblioteca da Meia Noite",
      autor: "Matt Haig",
      imagem: "../../../public/biblioteca_meianoite.jpeg",
    },
    {
      id: 4,
      titulo: "Duna",
      autor: "Frank Patrick Herbert",
      imagem: "../../../public/duna.jpg",
    },
  ]);
  const [livroSelecionado, setLivroSelecionado] = useState(null);
  const [notificacaoDevolucao, setNotificacaoDevolucao] = useState("");
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

  const handleLivroChange = (event) => {
    const livroId = event.target.value;
    const livroSelecionado = livros.find((livro) => livro.id === parseInt(livroId));
    setLivroSelecionado(livroSelecionado);
  };

  const handleDevolucao = () => {
    if (livroSelecionado) {
      setNotificacaoDevolucao(`${livroSelecionado.titulo} devolvido com sucesso!`);
      setLivroSelecionado(null);

      setTimeout(() => setNotificacaoDevolucao(""), 3000);
    } else {
      setNotificacaoDevolucao("Selecione um livro para devolver!");
      setTimeout(() => setNotificacaoDevolucao(""), 3000);
    }
  };

  return (
    <div className="devolucao-container">
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

      <div className="main-content">
        <h1>Devolução de Livros</h1>
        <p>Selecione o livro que você deseja devolver.</p>

        <div className="dropdown-container">
          <label htmlFor="livro">Escolha o livro</label>
          <select id="livro" onChange={handleLivroChange}>
            <option value="">Selecione um livro</option>
            {livros.map((livro) => (
              <option key={livro.id} value={livro.id}>
                {livro.titulo}
              </option>
            ))}
          </select>
        </div>

        {livroSelecionado && (
          <div className="livro-imagem-container">
            <img
              src={livroSelecionado.imagem}
              alt={livroSelecionado.titulo}
              className="livro-imagem"
            />
          </div>
        )}

        <button className="devolver-button" onClick={handleDevolucao}>
          Devolver
        </button>

        {notificacaoDevolucao && (
          <div className="notificacao">
            <p>{notificacaoDevolucao}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Devolucao;
