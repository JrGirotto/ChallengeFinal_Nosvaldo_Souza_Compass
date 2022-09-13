// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

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
