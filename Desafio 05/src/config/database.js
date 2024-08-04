const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './backend/database/guia_turistico.sqlite'
});

module.exports = sequelize;
