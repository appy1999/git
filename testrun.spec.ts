/// <reference types="Cypress" />
beforeEach(function(){
    cy.visit('https://staging.bugplot.com/signin')
    cy.get('[name=email]').type('alpha@yopmail.com')
    cy.get('[name=password]').type('Password@123')
    cy.get('#login-submit').click()
})
describe('test run ',function()
{
    it('Verify the Test Runs tab should be visible under project',function()
    {
        cy.contains('Test Runs').should('be.visible')
    })
    it('Verify under Test Runs tab "Add Test Run" button should be visible and clickable',function()
    {
        cy.contains('Test Runs').click()
        cy.contains('Add Test Run').should('be.visible')
        cy.get('#new-test-run').click()
    })
    it('Verify that user can see the test runs status like Completed, IN progress and vice versa',function()
    {
        cy.scrollTo(0, 800)
        cy.get('[data-cy="project-22"] > span').click()
        cy.get('[data-cy=test-cases-tab]').click()
    }) abcd to efgh
})
}) //new commit






