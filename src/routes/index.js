const listaAcolhidos = require('../routes/listaAcolhidos')
const home = require('../routes/home')
const sobre = require('../routes/sobre')
const acolhido = require('../routes/acolhido')
const farmaceutica = require('../routes/farmaceutica')
const prescricaoAtualizada = require('../routes/prescricaoAtualizada')

const users = require('../mocks/userArray')
const user = require('../mocks/user')
const acolhidos = require('../mocks/acolhido')
const tabelaFarmaceutica = require('../mocks/tabelaFarmaceutica')
const dadosFarmacia = require('../mocks/farmacia')

const allRoutes = {
  listaAcolhidos: listaAcolhidos(users),
  home: home(),
  sobre: sobre(user),
  acolhido: acolhido(acolhidos),
  prescricaoAtualizada: prescricaoAtualizada(tabelaFarmaceutica),
  farmaceutica : farmaceutica(dadosFarmacia)
}

module.exports = allRoutes
