const Sequelize = require('sequelize')

const qrys = (Prescricao, Acolhido) => (req, res) => {
    return Acolhido.find({
        where: {
            id: req.params.id
        },
        include: [Prescricao]
    }).then(acolhido => {
        res.render('pages/querys', { presc: acolhido.prescricaos, acolhido: acolhido })
    })
}

module.exports = qrys
