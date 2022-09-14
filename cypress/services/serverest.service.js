
const URL_USUARIOS = '/usuarios'
const URL_LOGIN = '/login'
const URL_PRODUTOS = '/produtos'
const URL_CARRINHOS = '/carrinhos'

export default class Serverest {

	//Ações a realizar na API:
	// - Buscar usuários
	// - Buscar usuários para Login
	// - Logar
	// - Salvar bearer (token)
	// - Buscar produtos
	// - Cadastrar Novos usuários
	// - Realizar Login

	static buscarUsuarios(){
		return cy.rest('GET', URL_USUARIOS)
	}

	static buscarUsuariosParaLogin(){
		cy.request(URL_USUARIOS).then(res => {
			cy.wrap({
				email: res.body.usuarios[2].email,
				password: res.body.usuarios[2].password
			}).as('usuarioLogin')
		})
	}

	static logar(usuario){
		return cy.rest('POST', URL_LOGIN, usuario)
	}

	static salvarBearer(resposta){
		Cypress.env('bearer', resposta.body.authorization.slice(7))
	}

	static buscarProdutos(){
		return cy.rest('GET', URL_PRODUTOS)
	}

	static cadastrarProdutoComSucesso(){
		return cy.request({
			method: "POST",
			url: URL_PRODUTOS,
			body: {
				"nome": "Cadeira",
				"preco": 1709,
				"descricao": "Cadeira Gamer com massagem TOP",
				"quantidade": 1263,
			},
			failOnStatusCode: true,
			auth: {
				bearer: Cypress.env('bearer')
			}
		})
	}

}

