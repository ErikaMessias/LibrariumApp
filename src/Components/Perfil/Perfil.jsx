import React, { useState } from 'react';
import { RiMenu3Line } from "react-icons/ri";
import "./Perfil.css";

const Perfil = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const usuario = {
    nome: "Erika Messias",
    email: "erika.messias@example.com",
    telefone: "(11) 99999-9999"
  };

  const historicoReservas = [
    { id: 1, titulo: "O Senhor dos Anéis", dataReserva: "2024-10-01", dataDevolucao: "2024-10-15", status: "Devolvido" },
    { id: 2, titulo: "Biblioteca da Meia Noite", dataReserva: "2024-11-01", dataDevolucao: "2024-11-10", status: "Em andamento" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="home-container">
      {/* Menu Superior */}
      <div className="menu-superior">
        <h2 className="logo">Librarium</h2>
        <RiMenu3Line className="menu-icon" onClick={toggleMenu} />
        {menuOpen && (
          <div className="menu-dropdown">
            <a href="/">Menu</a>
            <a href="/catalogo">Explorar Catálogo</a>
            <a href="/reserva">Fazer Reserva</a>
            <a href="/devolucao">Devolução</a>
            <a href="/perfil">Perfil</a>
            <a href="/login">Sair</a>
          </div>
        )}
      </div>

      {/* Conteúdo do Perfil */}
      <div className="perfil-content">
        <div className="perfil-info">
          <h2>Perfil do Usuário</h2>
          <p><strong>Nome:</strong> {usuario.nome}</p>
          <p><strong>Email:</strong> {usuario.email}</p>
          <p><strong>Telefone:</strong> {usuario.telefone}</p>
        </div>

        {/* Histórico de Reservas */}
        <div className="historico-reservas">
          <h3>Histórico de Reservas</h3>
          {historicoReservas.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Data de Reserva</th>
                  <th>Data de Devolução</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {historicoReservas.map((reserva) => (
                  <tr key={reserva.id}>
                    <td>{reserva.titulo}</td>
                    <td>{reserva.dataReserva}</td>
                    <td>{reserva.dataDevolucao}</td>
                    <td>{reserva.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="sem-reservas">Nenhuma reserva realizada</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Perfil;
