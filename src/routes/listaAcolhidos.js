const listaAcolhidos = (userArray) => (req, res) => { res.render('pages/listaAcolhidos', { users: userArray })}

module.exports = listaAcolhidos
