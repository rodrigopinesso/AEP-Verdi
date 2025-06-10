import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import NovaDenuncia from './pages/NovaDenuncia';
import Navbar from './components/Navbar';
import ToggleThemeButton from './components/ToggleThemeButton';
import PageTransition from './components/PageTransition';

const isAuthenticated = () => !!localStorage.getItem('token');

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={isAuthenticated() ? <PageTransition><Home /></PageTransition> : <Navigate to="/login" />} />
        <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
        <Route path="/register" element={<PageTransition><Register /></PageTransition>} />
        <Route path="/nova-denuncia" element={isAuthenticated() ? <PageTransition><NovaDenuncia /></PageTransition> : <Navigate to="/login" />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Navbar />
        <ToggleThemeButton />
        <header className="text-center my-6">
          <h1 className="text-3xl font-bold text-green-600 dark:text-green-400 animate-fade-in">Verdi 🌱</h1>
        </header>
        <main className="px-4 pb-10 animate-fade-in">
          <AppRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;