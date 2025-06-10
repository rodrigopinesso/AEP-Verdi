import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch {
      alert('Erro ao fazer login. Verifique suas credenciais.');
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
      <div className="bg-green-700/40 backdrop-blur-lg border border-green-300/30 shadow-2xl rounded-xl p-8 w-full max-w-md animate-fade-in motion-safe:animate-fade-in">
        <div className="mb-6 text-center">
          <h1 className="text-4xl font-extrabold text-white tracking-tight drop-shadow-lg">
            Verdi 🌿
          </h1>
          <p className="text-white/80 text-sm">Monitore e preserve as áreas verdes</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full border border-white/30 bg-white/10 text-white placeholder-white/60 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="email@exemplo.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white/80 mb-1">
              Senha
            </label>
            <input
              id="password"
              type="password"
              className="w-full border border-white/30 bg-white/10 text-white placeholder-white/60 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="********"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-lg transition duration-300"
          >
            Entrar
          </button>

          <p className="text-sm text-center text-white/80">
            Ainda não tem conta?{' '}
            <a
              href="/register"
              className="text-green-200 font-medium hover:underline transition"
            >
              Cadastre-se
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}