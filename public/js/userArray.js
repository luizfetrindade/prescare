const orderBy = require('./function.js')

const arrayUsuarios = [
  {name: 'Afonso'},
  {name: 'Olimar'},
  {name: 'Alvaro'},
  {name: 'Gilberto'},
  {name: 'Makelele'},
  {name: 'David'},
  {name: 'Yaya'},
  {name: 'Diovane'},
  {name: 'Marcos'},
  {name: 'Luiz'},
  {name: 'Murilo'},
  {name: 'Lindice'},
  {name: 'Claudia'},
  {name: 'Camila'},
  {name: 'Aline'},
  {name: 'Laura'},
  {name: 'Luiz'},
  {name: 'Patrick'},
  {name: 'Marta'},
  {name: 'Juliana'},
  {name: 'Mohamed'},
]

const arrayOrdenado = arrayUsuarios.sort(orderBy)

module.exports = arrayOrdenado
