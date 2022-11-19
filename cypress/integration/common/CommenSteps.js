Then("I should see {string}", (Text) => {
    cy.contains(Text)
})
When("I click on {string}", (Text) => {
   
    cy.contains(Text).click({force:true})
})
Given("I am not logged in", () => {

})
When("I go to Waffy Website", () => {
    cy.visit("/")
})