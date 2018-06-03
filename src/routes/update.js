const Sequelize = require('sequelize')

const qrys = (Prescricao, Acolhido) => (req, res) => {
    return Acolhido.find({
        where: {
            id: req.params.id
        },
        include: [Prescricao]
    }).then(acolhido => {
        acolhido.updateAttributes({
            nome: 'MEU NOVO NOME'
        });
        res.render('pages/update', { presc: acolhido.prescricaos, acolhido: acolhido })
    })
}

module.exports = qrys

