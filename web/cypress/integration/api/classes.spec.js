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
		}).then(response => {});
	});
});
