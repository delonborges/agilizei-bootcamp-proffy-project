/// <reference types="cypress" />

context('Landing page', () => {
	beforeEach(() => {
		cy.visit('/');
	});
	it('Browse to class registration', () => {
		cy.get('div a.give-classes').click();
		cy.url().should('contain', 'give-classes');
	});
	it('Browse to available classes', () => {
		cy.get('div a.study').click();
		cy.url().should('contain', 'study');
	});
});

// const widths = [1100, 1099];

// widths.forEach(width => {
// 	context(`Landing page - ${width}px`, () => {
// 		beforeEach(() => {
// 			cy.visit('/');
// 			cy.viewport(width, 720);
// 		});
// 		it('Navegar para o cadastro de aulas', () => {
// 			cy.get('div a.give-classes').click();
// 			cy.url().should('contain', 'give-classes');
// 		});
// 		it('Navegar para a pesquisa de professores', () => {
// 			cy.get('div a.study').click();
// 			cy.url().should('contain', 'study');
// 		});
// 	});
// });
