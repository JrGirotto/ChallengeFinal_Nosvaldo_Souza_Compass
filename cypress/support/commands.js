import Ajv from 'ajv'
const ajv = new Ajv({allErrors: true, verbose: true, strict: false})

//Teste de Contrato (Contrato de Validação)
Cypress.Commands.add('contractValidation', (res, schema, status) => {
	cy.log('Validando contrato para ' + schema + ' com status ' + status)
	cy.fixture(`schemas/${schema}/${status}.json`).then(schema => {
		const validate = ajv.compile(schema)
		const valid = validate(res.body)
		
		if (!valid){
			var errors = ''
			for (let each in validate.errors){
				let err = validate.errors[each]
				errors += `\n${err.instancePath} ${err.message}, but receive ${typeof err.data}`
			}
			throw new Error('Erros encontrados na validação de contrato, por favor verifique: '+ errors)
		}
		return true
	})
})


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
