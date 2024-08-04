const express = require('express');
const router = express.Router();
const Destino = require('../models/Destino');

router.get('/', async (req, res) => {
    try {
        const destinos = await Destino.findAll();
        res.json(destinos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
