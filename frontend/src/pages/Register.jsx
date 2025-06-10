import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/register', { username, email, password });
      navigate('/login');
    } catch {
      alert('Erro ao registrar. Tente novamente.');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1558980664-10e7170c2c91?auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <div className="bg-green-700/40 backdrop-blur-md border border-green-300/30 shadow-2xl rounded-xl p-8 w-full max-w-md animate-fade-in">
        
        <div className="text-center mb-6">
          <img
            src="/verdi-logo.png"
            alt="Logo Verdi"
            className="mx-auto h-14 mb-2 drop-shadow-lg"
          />
          <h2 className="text-3xl font-bold text-white drop-shadow">Criar Conta</h2>
          <p className="text-white/80 text-sm">Junte-se à preservação do verde 🌱</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
          <input
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-white/30 bg-white/10 text-white placeholder-white/60 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
            required
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-white/30 bg-white/10 text-white placeholder-white/60 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-white/30 bg-white/10 text-white placeholder-white/60 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-lg transition duration-300"
          >
            Registrar
          </button>

          <p className="text-sm text-center text-white/80">
            Já tem conta?{' '}
            <a
              href="/login"
              className="text-green-200 font-medium hover:underline transition"
            >
              Faça login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}