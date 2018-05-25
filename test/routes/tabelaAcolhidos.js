const listaAcolhidos = require("../../src/routes/listaAcolhidos")

describe('Quando acesso listaAcolhidos', () => {
    it('Deve mostrar uma lista de nomes', () => {
        const req = {}
        const res = {render : jest.fn()}
        const users = [{ nome: 'Leo' }, { nome: 'Luna' } ]
        
        listaAcolhidos(users)(req,res)
        
        expect(res.render).toBeCalledWith('pages/listaAcolhidos', { users } )
    })
})