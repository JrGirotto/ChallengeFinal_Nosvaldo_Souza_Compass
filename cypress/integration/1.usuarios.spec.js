/// <reference types="cypress" />>

import Factory from '../fixtures/factory'
import Serverest from '../services/serverest.service'
import ValidaServerest from '../services/validaServerest.service'

describe('Casos de teste sobre a rota /usuario da API Serverest', () => {
	

	it('Deve buscar todos os usuários cadastrados na Serverest', () => {
		Serverest.buscarUsuarios().then( res => {
			cy.contractValidation(res, 'get-usuarios', 200)
			ValidaServerest.validarBuscaDeUsuarios(res)
		})		
	})
	
	it('Não deve postar um novo usuário administrador existente', () => {
		cy.postarUsuarioSemSucesso().then( res => {
			cy.contractValidation(res, 'post-usuarios', 400)
			expect(res.body.message).to.be.eq('Este email já está sendo usado')
		})	
	})

	it('Realizar o login com sucesso', () => {
		Serverest.buscarUsuariosParaLogin()
		cy.get('@usuarioLogin').then( usuario => {
			Serverest.logar(usuario).then( res => {
				ValidaServerest.validarLoginComSucesso(res)
				Serverest.salvarBearer(res)
			})
		})	
	})
	
	it('Buscar e salvar um usuário de um arquivo JSON', () => {
		let inteiro = Factory.gerarInteiroAleatorio()
		Serverest.buscarUsuarios().then( res => {
			cy.writeFile('./cypress/fixtures/usuario.json', res.body.usuarios[inteiro])
			ValidaServerest.validarBuscaDeUsuarios(res)
			cy.log(JSON.stringify(res.body.usuarios[inteiro]))
		})	
	})	

	it('Buscar o usuário de um arquivo JSON', () => {
		cy.fixture('usuario.json').then( json => {
			let usuario = {
				email: json.email,
				password: json.password
			}
			Serverest.logar(usuario).then( res => {
				ValidaServerest.validarLoginComSucesso(res)
				Serverest.salvarBearer(res)
			})
		})
	})	

	//Tentativa de fazer os testes sozinho:

	/*
	//Delete - Status 200
	it('Deletar o usuário com ID', () => {
		cy.deletarUsuarioComSucesso(response.body._).then( res => {
			//cy.contractValidation(res, 'delete-usuarios', 200)
			expect(res.body.message).to.be.eq('Registro excluído com sucesso')
		})	
	})	
	
	//Put - Status 200
	
	it('Alterar o Registro do usuário', () => {
		cy.alterarRegistroDoUsuario().then( res => {
			ValidaServerest.contractValidation(res, 'put-usuarios', 200)
			expect(res.body.message).to.be.eq('Registro alterado com sucesso')
		})	
	})	
	
	//Put - Status 201 - Precisa do ID
	it('Alterar o Cadastro do usuário', () => {
		Serverest.alterarCadastroDoUsuario().then( res => {
			ValidaServerest.contractValidation(res, 'put-usuarios', 201)
			expect(res.body.message).to.be.eq('Cadastro realizado com sucesso')
		})	
	})
	
	//Put - Status 400
	it('Alterar o Email do usuário', () => {
		Serverest.alterarEmailDoUsuario().then( res => {
			ValidaServerest.contractValidation(res, 'put-usuarios', 400)
			expect(res.body.message).to.be.eq('Este email já está sendo usado')
		})	
	})
	

	//Delete - Status 400
	it('Deletar o usuário com Carrinho cadastrado', () => {
		Serverest.deletarUsuarios().then( res => {
			ValidaServerest.contractValidation(res, 'delete-usuarios', 400)
			expect(res.body.message).to.be.eq('Não é permitido excluir usuário com carrinho cadastrado')
		})	
	})	
	*/
	

	
})
