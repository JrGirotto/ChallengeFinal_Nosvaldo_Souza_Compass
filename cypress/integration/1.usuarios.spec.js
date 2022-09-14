/// <reference types="cypress" />>

import Serverest from '../services/serverest.service'
import ValidaServerest from '../services/validaServerest.service'

describe('Casos de teste sobre a rota /usuario da API Serverest', () => {
	
	it('Deve buscar todos os usuários cadastrados na Serverest', () => {
		Serverest.buscarUsuarios().then( res => {
			ValidaServerest.validarBuscaDeUsuarios(res)
		})		
	})

	it('Não deve postar um novo usuário administrador existente', () => {
		cy.postarUsuarioSemSucesso().then( res => {
			expect(res).to.be.a('object')
			expect(res.body.message).to.be.a('string')
			expect(res.body.message).to.be.eq('Este email já está sendo usado')
		})	
	})
	
	// it('Validar comando personalizado', () => {
	// 	cy.rest('GET', '/usuarios').then( res => {
	// 		expect(res).to.be.a('object')
	// 		cy.log(JSON.stringify(res))
	// 	})	
	// })

	it('Realizar o login com sucesso', () => {
		Serverest.buscarUsuariosParaLogin()
		cy.get('@usuarioLogin').then( usuario => {
			Serverest.logar(usuario).then( res => {
			ValidaServerest.validarLoginComSucesso(res)
			Serverest.salvarBearer(res)
			})
		})	
	})
})