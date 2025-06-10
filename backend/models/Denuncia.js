const mongoose = require('mongoose');

const denunciaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  localizacao: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true }
  },
  status: { type: String, enum: ['pendente', 'resolvido'], default: 'pendente' },
  imagemUrl: { type: String }, // para uso futuro
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Denuncia', denunciaSchema);