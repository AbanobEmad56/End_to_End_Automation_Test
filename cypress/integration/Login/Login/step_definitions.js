import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';



When("I fill invalid OTP", () => {
    cy.xpath("//*[@data-index='0']").type(1)
    cy.xpath("//*[@data-index='1']").type(1)
})



When("I fill ivalid Password", () => {
    cy.wait(1000)
    cy.xpath("//*[@data-index='0']").type(0)
    cy.xpath("//*[@data-index='1']").type(0)
    cy.xpath("//*[@data-index='2']").type(0)

})



