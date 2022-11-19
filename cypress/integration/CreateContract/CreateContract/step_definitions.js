import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';

When("I fill in item Name", () => {
    let RundomNumber = Math.floor(Math.random() * (1 - 100000 + 1)) + 1;
    cy.xpath("//*[@class='styles_text_area__vdYda'][@maxlength='50']").type("Test Product By Automation"+RundomNumber)
})

When("I fill in Product description", () => {
    cy.xpath("//*[@class='styles_text_area__vdYda'][@maxlength='500']").type("That is an amazing product")
})

When("I fill the itme price", () => {
    let RundomNumber = Math.floor(Math.random() * (1000 - 9000 + 1)) + 1000;
    cy.xpath("//*[@class='styles_text_area__vdYda styles_number__qA20P'][@maxlength='9']").type(RundomNumber)
})


When("I fill the over itme price", () => {
    
    cy.xpath("//*[@class='styles_text_area__vdYda styles_number__qA20P'][@maxlength='9']").type(50000)
})
When("I activate delivary option", () => {
    cy.xpath("//*[@type='checkbox'][@class='PrivateSwitchBase-input MuiSwitch-input muirtl-1m9pwf3']").click()
})
When("I fill the delivary price", () => {
    let RundomNumber = Math.floor(Math.random() * (100 - 900 + 1)) + 100;
    cy.xpath("//div[3]/div/textarea[@aria-label='maximum height']").type(RundomNumber)
})



When("I fill the over delivary price", () => {
    cy.xpath("//div[3]/div/textarea[@aria-label='maximum height']").type(50000)
})
When("I Attch product photo", () => {
    cy.xpath("//*[@id='picture']").selectFile('G:\TestICon.png')
})


When("I accept terms and condtions", () => {
    cy.xpath("//*[@type='checkbox'][@data-indeterminate='false']").click()
})



When("Contanue button should be Disabled", () => {
    cy.xpath("//*[contains(text(),'متابعة')]").should('be.disabled')
})

When("Create contract button should be Disabled", () => {
    cy.xpath("//*[contains(text(),'إنشاء المعاملة')]").should('be.disabled')
})





