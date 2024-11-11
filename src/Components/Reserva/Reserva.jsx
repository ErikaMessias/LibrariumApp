import React, { useState, useEffect, useRef } from "react";
import { RiMenu3Line } from "react-icons/ri";
import "./Reserva.css";

const Reserva = () => {
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

  const [livroSelecionado, setLivroSelecionado] = useState(null);
  const [dataRetirada, setDataRetirada] = useState("");
  const [dataDevolucao, setDataDevolucao] = useState("");

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

  const handleReserva = () => {
    if (!livroSelecionado) {
      alert("Selecione um livro para a reserva!");
      return;
    }
    alert(`Reserva confirmada para o livro: ${livroSelecionado.titulo}`);
  };

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
        <h1>Faça sua Reserva</h1>
        <p>Selecione um livro disponível e escolha as datas de retirada e devolução.</p>

        {/* Dropdown para selecionar o livro */}
        <div className="form-reserva">
          <label htmlFor="livro">Selecione o Livro</label>
          <select
            id="livro"
            value={livroSelecionado ? livroSelecionado.id : ""}
            onChange={(e) =>
              setLivroSelecionado(
                livros.find((livro) => livro.id === parseInt(e.target.value))
              )
            }
          >
            <option value="">Selecione um livro</option>
            {livros
              .filter((livro) => livro.disponibilidade)
              .map((livro) => (
                <option key={livro.id} value={livro.id}>
                  {livro.titulo}
                </option>
              ))}
          </select>
        </div>

        {/* Formulário de data */}
        {livroSelecionado && (
          <>
            <div className="form-reserva">
              <label htmlFor="dataRetirada">Data de Retirada</label>
              <input
                type="date"
                id="dataRetirada"
                value={dataRetirada}
                onChange={(e) => setDataRetirada(e.target.value)}
              />
            </div>

            <div className="form-reserva">
              <label htmlFor="dataDevolucao">Data de Devolução</label>
              <input
                type="date"
                id="dataDevolucao"
                value={dataDevolucao}
                onChange={(e) => setDataDevolucao(e.target.value)}
              />
            </div>

            <button
              className="reserva-button"
              onClick={handleReserva}
              disabled={!dataRetirada || !dataDevolucao}
            >
              Confirmar Reserva
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Reserva;
