const acolhido = require('../routes/acolhido')
const farmaceutica = require('../routes/farmaceutica')
const home = require('../routes/home')
const listaAcolhidos = require('../routes/listaAcolhidos')
const prescricaoAtualizada = require('../routes/prescricaoAtualizada')
const sobre = require('../routes/sobre')

const acolhidos = require('../mocks/acolhido')
const dadosFarmacia = require('../mocks/farmacia')
const users = require('../mocks/listaAcolhidos')
const tabelaFarmaceutica = require('../mocks/tabelaFarmaceutica')
const user = require('../mocks/user')

const allRoutes = {
  acolhido: acolhido(acolhidos),
  farmaceutica : farmaceutica(dadosFarmacia),
  home: home(),
  listaAcolhidos: listaAcolhidos(users),
  prescricaoAtualizada: prescricaoAtualizada(tabelaFarmaceutica),
  sobre: sobre(user),
}

module.exports = allRoutes
