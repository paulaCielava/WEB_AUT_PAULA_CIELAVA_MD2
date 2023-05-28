const { describe } = require("mocha");


describe('Make An Appointment', () => {
  it('Make Appointment', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com');

    cy.contains('Make Appointment').click();

    cy.get('#txt-username').type('John Doe');
    cy.get('#txt-password').type('ThisIsNotAPassword');
    cy.get('#btn-login').click();

    cy.get('#combo_facility').select('Seoul CURA Healthcare Center')
    cy.get('#chk_hospotal_readmission').click();
    cy.get('#txt_visit_date').click()
    cy.get('#txt_visit_date').type('30')
    cy.get('#txt_comment').clear({force: true})
    cy.get('#txt_comment').type('CURA Healthcare Service')
    cy.contains('Book Appointment').click()

    cy.get('#combo_facility').should('have.value', 'Seoul CURA Healthcare Center')
    cy.get('#txt_visit_date').should('have.value', '30')
    cy.get('#txt_comment').should('have.value', 'CURA Healthcare Service')
  })
  
  

})


  


