const Denuncia = require('../models/Denuncia');

exports.criarDenuncia = async (req, res) => {
  try {
    const { titulo, descricao, localizacao } = req.body;
    const nova = await Denuncia.create({
      titulo,
      descricao,
      localizacao,
      usuario: req.user.id
    });
    res.status(201).json(nova);
  } catch (err) {
    res.status(400).json({ error: 'Erro ao criar denúncia.', detalhes: err.message });
  }
};

exports.listarDenuncias = async (req, res) => {
  try {
    const denuncias = await Denuncia.find().populate('usuario', 'username');
    res.json(denuncias);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao listar denúncias.' });
  }
};

exports.atualizarStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const denuncia = await Denuncia.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    if (!denuncia) return res.status(404).json({ error: 'Denúncia não encontrada.' });
    res.json(denuncia);
  } catch (err) {
    res.status(400).json({ error: 'Erro ao atualizar denúncia.' });
  }
};

exports.deletarDenuncia = async (req, res) => {
  try {
    const { id } = req.params;
    const denuncia = await Denuncia.findById(id);
    if (!denuncia) return res.status(404).json({ error: 'Denúncia não encontrada.' });

    if (req.user.id !== denuncia.usuario.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Acesso negado.' });
    }

    await denuncia.remove();
    res.json({ message: 'Denúncia removida com sucesso.' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar denúncia.' });
  }
};