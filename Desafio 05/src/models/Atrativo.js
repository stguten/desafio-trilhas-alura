const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Destino = require('./Destino');

const Atrativo = sequelize.define('Atrativo', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    dicas: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    destinoId: {
        type: DataTypes.INTEGER,
        references: {
            model: Destino,
            key: 'id'
        }
    }
});

Destino.hasMany(Atrativo, { foreignKey: 'destinoId' });
Atrativo.belongsTo(Destino, { foreignKey: 'destinoId' });

module.exports = Atrativo;
