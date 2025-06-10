const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.middleware');
const {
  criarDenuncia,
  listarDenuncias,
  atualizarStatus,
  deletarDenuncia
} = require('../controllers/denuncia.controller');

router.post('/', auth, criarDenuncia);
router.get('/', listarDenuncias);
router.patch('/:id', auth, atualizarStatus);
router.delete('/:id', auth, deletarDenuncia);

module.exports = router;