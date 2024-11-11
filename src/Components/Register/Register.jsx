import { useState } from "react";
import { Link } from "react-router-dom"; 
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Dados de Cadastro:", { email, username, password, confirmPassword });
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-box">
        <h1>Crie sua conta</h1>
        <p>Preencha os campos abaixo para se registrar</p>

        <div className="input-field">
          <input
            type="email"
            placeholder="E-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-field">
          <input
            type="text"
            placeholder="Nome de usuário"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="input-field">
          <input
            type="password"
            placeholder="Confirme sua senha"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button type="submit">Cadastrar</button>
        <div className="login-link">
          <p>
            Já tem uma conta? <Link to="/Login">Entrar</Link> 
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
