
Cypress.Commands.add('postarUsuarioSemSucesso', () => {
	return cy.request({
		method: 'POST',
		url: '/usuarios',
		failOnStatusCode: false,
		body: {
			"nome": "Douglas Gomes Tavares",
			"email": "douglastavagomes@qa.com.br",
			"password": "test",
			"administrador": "true",
		}
	})
})

Cypress.Commands.add('rest', (method = 'GET', url = '/', body = null, failOnStatusCode = false) => {
	return cy.request({
		method: method,
		url: url,
		failOnStatusCode: failOnStatusCode,
		body: body
	})
})

Cypress.Commands.add('logar', (email, password) => {
	return cy.request({
		method: 'POST',
		url: '/login',
		failOnStatusCode: false,
		body: {
			"email": email,
			"password": password,
		}
	})
})

Cypress.Commands.add('buscarUsuarioLogin', () => {
	cy.rest('GET', '/usuarios').then( res => {
		expect(res.body).to.haveOwnProperty('usuarios')
		return {
			email: res.body.usuarios[0].email,
			password: res.body.usuarios[0].password
		}
	})
})
