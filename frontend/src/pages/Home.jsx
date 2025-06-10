import { useEffect, useState } from 'react';
import api from '../services/api';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

export default function Home() {
  const [denuncias, setDenuncias] = useState([]);

  useEffect(() => {
    async function carregarDenuncias() {
      try {
        const res = await api.get('/denuncias');
        setDenuncias(res.data);
      } catch (err) {
        console.error('Erro ao buscar denúncias:', err);
        alert('Erro ao carregar denúncias');
      }
    }

    carregarDenuncias();
  }, []);

  const defaultIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (
    <div className="min-h-screen bg-green-50 dark:bg-gray-900 p-6 transition-colors duration-300">
      <h2 className="text-3xl font-bold text-green-700 dark:text-green-300 mb-6 text-center animate-fade-in-up">
        Mapa de Denúncias Ambientais
      </h2>

      <div className="rounded-xl overflow-hidden shadow-xl border border-green-200 dark:border-green-700 mb-8">
        <MapContainer
          center={[-23.420999, -51.933056]}
          zoom={13}
          className="h-[500px] w-full z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {denuncias.map((denuncia) => (
            <Marker
              key={denuncia._id}
              position={[denuncia.localizacao.latitude, denuncia.localizacao.longitude]}
              icon={defaultIcon}
            >
              <Popup>
                <strong>{denuncia.titulo}</strong><br />
                {denuncia.descricao}<br />
                <em>Status: {denuncia.status}</em>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <h3 className="text-2xl font-semibold text-green-800 dark:text-green-200 mb-4">📄 Lista de Denúncias</h3>

      {denuncias.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">Nenhuma denúncia encontrada.</p>
      ) : (
        <ul className="space-y-4">
          {denuncias.map((d) => (
            <li
              key={d._id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 border border-green-100 dark:border-green-600 transition-all duration-300 hover:shadow-md"
            >
              <h4 className="text-lg font-bold text-green-800 dark:text-green-300">{d.titulo}</h4>
              <p className="text-gray-700 dark:text-gray-200">{d.descricao}</p>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                📍 Lat: {d.localizacao.latitude} | Lng: {d.localizacao.longitude}
              </div>
              <div className="text-sm font-medium text-green-600 dark:text-green-400">
                Status: {d.status}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}