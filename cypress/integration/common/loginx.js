When("I Enter my Mobile number {string}", (MobileNumber) => {
    cy.xpath("//*[@type='tel']").type(MobileNumber)
})

When("I fill The OTP", () => {
    cy.xpath("//*[@data-index='0']").type(1)
    cy.xpath("//*[@data-index='1']").type(1)
    cy.xpath("//*[@data-index='2']").type(1)
    cy.xpath("//*[@data-index='3']").type(1)
})

When("I fill The Password", () => {
    cy.wait(1000)
    cy.xpath("//*[@data-index='0']").type(1)
    cy.xpath("//*[@data-index='1']").type(1)
    cy.xpath("//*[@data-index='2']").type(1)
    cy.xpath("//*[@data-index='3']").type(1)
    cy.xpath("//*[@data-index='4']").type(1)
    cy.xpath("//*[@data-index='5']").type(1)
})



