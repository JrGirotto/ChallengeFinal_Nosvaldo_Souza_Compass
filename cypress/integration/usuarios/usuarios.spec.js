/// <reference types="cypress" />>

describe('Casos de teste sobre a rota /usuario da API Serverest', () => {
	
	it('Deve buscar todos os usuários cadastrados na Serverest', () => {
		cy.request('/usuarios').then( res => {
			expect(res).to.be.a('object')
			expect(res.body.quantidade).to.be.a('number')
			expect(res.body.quantidade).to.be.greaterThan(0)
		
		})		
	})

	it('Não deve postar um novo usuário administrador existente', () => {
		cy.postarUsuarioSemSucesso().then( res => {
			expect(res).to.be.a('object')
			expect(res.body.message).to.be.a('string')
			expect(res.body.message).to.be.eq('Este email já está sendo usado')
		})	
	})

	it('Validar comando personalizado', () => {
		cy.rest('GET', '/usuarios').then( res => {
			expect(res).to.be.a('object')
			cy.log(JSON.stringify(res))
		})	
	})

	it.only('Realizar o login com sucesso', () => {
		cy.buscarUsuarioLogin().then( usuario => {
			cy.logar(usuario.email, usuario.password).then( res => {
				expect(res).to.be.a('object')
				expect(res.body.message).to.be.a('string')
				expect(res.body).to.haveOwnProperty('authorization')
				var bearer = res.body.authorization.slice(7)
				cy.log(bearer)
			})
		})	
	})
})