const landingElements = require('./elements').ELEMENTS;

class Landing {
	loadPage() {
		cy.visit('/');
	}

	clickGiveClassesButton() {
		cy.get(landingElements.buttonGiveClasses).click();
	}
}

export default new Landing();
