import './Auth.css';

// Components 
import { Link } from 'react-router-dom';
import Message from '../../components/Message';

// Hooks
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux
import { login, reset } from '../../slices/authSlice';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email,
      password
    };

    dispatch(login(user));
  };

  // Clean all auth states
  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <div className="form-wrapper">
      <h2>ReactGram</h2>
      <p className="subtitle">
        Faça o login para ver as fotos dos seus amigos.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        {!loading && <input type="submit" value="Entrar" />}
        {loading && (
          <input type="submit" value="Aguarde..." disabled />
        )}
        {error && <Message msg={error} type="error" />}
      </form>
      <p>
        Não tem uma conta? <Link to="/register">Cadastre-se</Link>
      </p>
    </div>
  );
}

export default Login
