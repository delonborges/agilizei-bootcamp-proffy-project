import { lorem, name } from 'faker';
// import routes from '../../support/routes';
const giveClassesElements = require('./elements').ELEMENTS;

const username = name.firstName() + ' ' + name.lastName();

class GiveClasses {
	loadPage() {
		cy.visit('give-classes');
	}

	fillForm() {
		cy.get(giveClassesElements.inputName).type(username);
		cy.get(giveClassesElements.inputAvatar).type(lorem.slug);
	}

	submitForm() {
		cy.get(giveClassesElements.buttonSubmit).click();
	}

	assertArticleSubmission() {
		// cy.wait(`@${routes.as.postArticles}`).its('response.statusCode').should('eq', 200);
		// cy.wait(`@${routes.as.getArticlesTitle}`).its('response.statusCode').should('eq', 200);
		// cy.wait(`@${routes.as.getArticlesTitleComments}`).its('response.statusCode').should('eq', 200);
		// cy.get(articleElements.articleTitle).should('contain.text', 'Article Title');
		// cy.get(articleElements.articleAuthor).should('contain.text', Cypress.config().user.name);
	}
}

export default new GiveClasses();
