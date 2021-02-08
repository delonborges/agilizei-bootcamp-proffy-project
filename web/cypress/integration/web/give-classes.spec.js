/// <reference types="cypress" />

import landing from '../../pages/landing';
import give_classes from '../../pages/give-classes';

context('Give classes page', () => {
	it('Register a new class', () => {
		// Act
		landing.loadPage();
		landing.clickGiveClassesButton();
		// Arrange
		give_classes.fillForm();
	});
});
