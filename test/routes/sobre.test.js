const sobre = require("../../src/routes/sobre")

describe('Quando acesso sobre', () => {
    it('Deve mostrar pagina com informacoes', () => {
        const req = {}
        const res = {render : jest.fn()}
        const usuario = [{ nome: 'Leo' ,  email: 'Luna@bol.com', avatar: 'img' } ]
        
        sobre(usuario)(req,res)
        
        expect(res.render).toBeCalledWith('pages/sobre', { usuario } )
    })
})