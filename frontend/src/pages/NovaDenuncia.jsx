import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

export default function NovaDenuncia() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const navigate = useNavigate();

  const defaultIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!latitude || !longitude) {
      return alert('Clique no mapa para selecionar a localização da denúncia.');
    }

    try {
      await api.post('/denuncias', {
        titulo,
        descricao,
        localizacao: { latitude, longitude },
      });
      alert('Denúncia registrada com sucesso!');
      navigate('/');
    } catch (err) {
      console.error(err);
      alert('Erro ao registrar denúncia');
    }
  };

  function LocationSelector() {
    useMapEvents({
      click(e) {
        setLatitude(e.latlng.lat);
        setLongitude(e.latlng.lng);
      },
    });
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-green-700 mb-6">Nova Denúncia</h2>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow">
        <input
          type="text"
          placeholder="Título da denúncia"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        <textarea
          placeholder="Descrição do problema"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            value={latitude || ''}
            placeholder="Latitude"
            disabled
            className="w-full bg-gray-100 border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="text"
            value={longitude || ''}
            placeholder="Longitude"
            disabled
            className="w-full bg-gray-100 border border-gray-300 rounded px-4 py-2"
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white font-semibold px-6 py-2 rounded hover:bg-green-700 transition"
        >
          Enviar Denúncia
        </button>
      </form>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">Selecione a localização no mapa:</h3>
        <MapContainer
          center={[-23.420999, -51.933056]}
          zoom={13}
          style={{ height: '400px', width: '100%', borderRadius: '8px', overflow: 'hidden' }}
        >
          <TileLayer
            attribution='&copy; OpenStreetMap'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationSelector />
          {latitude && longitude && (
            <Marker position={[latitude, longitude]} icon={defaultIcon} />
          )}
        </MapContainer>
      </div>
    </div>
  );
}