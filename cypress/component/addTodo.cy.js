import React from 'react'
import Addtodo from '../../src/AddTodo'


describe('<Addtodo />', () => {

    const accountService = {
        logout: () => {
            return null;
        }
    }
    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
        cy.spy(accountService, 'logout').as('accountService-logout-method');

        cy.mount(<Addtodo addTodo={accountService.logout} />)

        cy.get('input').type('Sprint meeting')

        cy.get('input').should('have.value', 'Sprint meeting')

        cy.get('button').click()

        cy.get('@accountService-logout-method').should('have.been.called');

    })

})