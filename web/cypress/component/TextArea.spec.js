/// <reference types="cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';
import { BrowserRouter as Router } from 'react-router-dom';
import Textarea from '../../src/components/Textarea';

context('TextArea Component', () => {
	const baseCss = '/__root/src/assets/styles/global.css';
	const indexCss = '/__root/src/components/Textarea/styles.css';

	it('deve ser renderizado com sucesso', () => {
		const label = 'Biografia';
		mount(
			<Router>
				<Textarea label={label} />
			</Router>,
			{
				stylesheets: [baseCss, indexCss],
			}
		);
		cy.get('.textarea-block').as('textAreaBlock');
		cy.get('@textAreaBlock').find('label').as('label');
		cy.get('@textAreaBlock').find('textarea').as('textarea');

		cy.get('@label').should('have.text', label);
		cy.get('@textarea').then($elemento => {
			expect($elemento.css('resize')).to.be.equal('vertical');
		});
	});
});
