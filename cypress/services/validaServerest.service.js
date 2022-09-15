
export default class ValidaServerest {

	//Validações das Ações a realizar na API:
	// - Validar a busca de usuários
	// - Validar Login
	// - Validar a busca de produtos
	// - Validar o cadastro de produtos com sucesso

	//Teste de Contrato (Só ficou o expect que não pode ser feito no teste de contrato)
	static validarBuscaDeUsuarios(resposta){
		//expect(resposta).to.be.a('object')
		//expect(resposta.body.quantidade).to.be.a('number')
		expect(resposta.body.quantidade).to.be.greaterThan(10)
	}

	static validarLoginComSucesso(resposta){
		expect(resposta).to.be.a('object')
		expect(resposta.body.message).to.be.a('string')
		expect(resposta.body).to.haveOwnProperty('authorization')
	}

	static validarBuscaDeProdutos(resposta){
		expect(resposta).to.be.a('object')
		expect(resposta.body.quantidade).to.be.a('number')
		expect(resposta.body.produtos[0]).to.haveOwnProperty('nome')
		expect(resposta.body.produtos[0]).to.haveOwnProperty('preco')
		expect(resposta.body.produtos[0]).to.haveOwnProperty('descricao')
	}

	static validarCadastroDeProdutoComSucesso(resposta){
		expect(resposta).to.be.a('object')
		expect(resposta.body.message).to.be.a('string')
		expect(resposta.body.message).to.be.eq('Cadastro realizado com sucesso')
		expect(resposta.body).to.haveOwnProperty('_id')
	}



}