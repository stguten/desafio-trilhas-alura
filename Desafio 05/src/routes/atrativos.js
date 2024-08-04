const express = require('express');
const router = express.Router();
const Atrativo = require('../models/Atrativo');

router.get('/', async (req, res) => {
    try {
        const atrativos = await Atrativo.findAll();
        res.json(atrativos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Obter atrativos por destino
router.get('/destino/:destinoId', async (req, res) => {
    const { destinoId } = req.params;
    try {
        const atrativos = await Atrativo.findAll({ where: { destinoId } });
        res.json(atrativos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
