import React from 'react'

import Todo from '../../src/Todo';


describe('<Todo />', () => {

    const todo = {
        id: 1,
        title: 'Sprint meeting',
        isActive: false
    }

    const todoFunctions = {
        deleteTodo: () => {
            console.log('deleteTodo')
        },
        updateTodo: () => {
            console.log('updateTodo')
        }

    }

    it('renders', () => {
        // see: https://on.cypress.io/mounting-react

        cy.spy(todoFunctions, 'deleteTodo').as('todoFunctions-deleteTodo-method');
        cy.spy(todoFunctions, 'updateTodo').as('todoFunctions-updateTodo-method');

        cy.mount(<Todo todo={todo} deleteTodo={todoFunctions.deleteTodo} updateTodo={todoFunctions.updateTodo} />)


        cy.get("[title='Mark incomplete']").click()

        cy.get('@todoFunctions-updateTodo-method').should('have.been.called');

        cy.get("[title='Delete todo']").click()

        cy.get('@todoFunctions-deleteTodo-method').should('have.been.called');

        cy.contains("Sprint meeting").should("exist");
    })

})