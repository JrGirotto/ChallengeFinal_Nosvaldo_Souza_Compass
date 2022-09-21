
export default class ValidaServerest {

	//Validações das Ações a realizar na API:
	// - Validar a busca de usuários
	// - Validar Login
	// - Validar a busca de produtos
	// - Validar o cadastro de produtos com sucesso

	//Teste de Contrato (Só ficou o expect que não pode ser feito no teste de contrato, no caso as mensagens)
	static validarBuscaDeUsuarios(resposta){
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

	/*
	static validarQuantidadeUsuarios(body){
		expect(body["quantidade"]).to.be.above(0)
	 }

	static deletarUsuarioComSucesso(resposta){
		expect(resposta.body).exist
		//expect(resposta.body).to.haveOwnProperty('_id')
		expect(resposta.body.message).to.be.eq('Registro excluído com sucesso')
	}
	 
	static deletarUsuarioComCarrinho(resposta){
		expect(resposta.body.message).to.be.eq('Não é permitido excluir usuário com carrinho cadastrado')
		expect(resposta.body).to.haveOwnProperty('_id')
	}

	static alterarRegistroDoUsuario(resposta){
		expect(resposta.body.message).to.be.eq('Registro alterado com sucesso')
	}

	static alterarCadastroDoUsuario(resposta){
		expect(resposta.body.message).to.be.eq('Cadastro realizado com sucesso')
		expect(resposta.body).to.haveOwnProperty('_id')
	}

	static alterarEmailDoUsuario(resposta){
		expect(resposta.body.message).to.be.eq('Este email já está sendo usado')
	} */



}