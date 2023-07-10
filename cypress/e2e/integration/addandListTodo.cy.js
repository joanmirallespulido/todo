describe("create todo spec", () => {
    before(() => {
        // this will launch the page in cypress browser
        cy.visit("http://localhost:3000");
    });

    it("successfully create a todo", () => {
        // find an input by tagname
        cy.get("input").type("Sprint meeting");

        // submit form by title of submit button
        cy.get("[title='Add Todo']").click();

        // create another todo
        cy.get("input").type("Coding");

        // submit form by classname of submit button
        cy.get(".submit-button").click();

        // check if new todos exist
        cy.contains("Sprint meeting").should("exist");
        cy.contains("Coding").should("exist");
    });


});