import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-green-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo + Título */}
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold tracking-wide">
            <img
              src="/verdi-logo.png"
              alt="Logo Verdi"
              className="w-8 h-8"
            />
            Verdi
          </Link>

          {/* Links de Navegação */}
          <div className="flex space-x-4">
            <Link
              to="/"
              className="hover:bg-green-800 px-3 py-2 rounded-md text-sm font-medium transition duration-200"
            >
              Início
            </Link>
            <Link
              to="/register"
              className="hover:bg-green-800 px-3 py-2 rounded-md text-sm font-medium transition duration-200"
            >
              Registrar
            </Link>
            <Link
              to="/nova-denuncia"
              className="hover:bg-green-800 px-3 py-2 rounded-md text-sm font-medium transition duration-200"
            >
              Nova Denúncia
            </Link>
            <button
              onClick={logout}
              className="hover:bg-green-800 px-3 py-2 rounded-md text-sm font-medium transition duration-200"
            >
              Sair
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}