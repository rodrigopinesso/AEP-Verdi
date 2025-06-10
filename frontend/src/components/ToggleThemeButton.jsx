import { useEffect, useState } from 'react';

export default function ToggleThemeButton() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed bottom-4 right-4 z-50 px-4 py-2 bg-green-600 text-white dark:bg-green-400 dark:text-gray-800 rounded-full shadow-lg hover:brightness-110 transition"
      title="Alternar tema"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}