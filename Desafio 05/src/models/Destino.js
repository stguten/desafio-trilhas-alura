const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Destino = sequelize.define('Destino', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    imagem: {
        type: DataTypes.STRING,
        allowNull: false
    },
    coordenadas: {
        type: DataTypes.JSON,
        allowNull: false
    }
});

module.exports = Destino;