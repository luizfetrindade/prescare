const sequelize = require('sequelize')

module.exports = db => db.define('acolhido', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: sequelize.STRING,
  idade: sequelize.INTEGER,
  peso: sequelize.FLOAT,
  alergias: sequelize.STRING,
  via_alimentacao: sequelize.STRING
  },
  {
    underscored: true
  }
)
