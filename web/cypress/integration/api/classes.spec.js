/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />

context('classes endpoint', () => {
	it('POST - cadastrar um novo professor', () => {
		cy.api({
			method: 'POST',
			url: `${Cypress.config().apiUrl}/classes`,
			body: {
				name: 'Professor Delon',
				avatar: 'https://image.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg',
				whatsapp: '51987654321',
				bio: 'Lorem ipsum lorem ipsum',
				subject: 'Lógica',
				cost: 1000,
				schedule: [{ week_day: 0, from: '08:00', to: '09:00' }],
			},
		}).then(response => {
			expect(response.status).to.equal(201);
			expect(response.body[0].week_day).to.be.a('number').equal(0);
			expect(response.body[0].from).to.be.a('number').equal(480);
			expect(response.body[0].to).to.be.a('number').equal(540);
			expect(response.headers).to.have.property('content-type').an('string').equal('application/json; charset=utf-8');
		});
	});
});
