import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';





When("I Enter Rundom Mobile number", () => {
    let RundomMobileNumber = Math.floor(Math.random() * (1111111 - 999999 + 1)) + 111111;
    
    cy.xpath("//*[@type='tel']").type("568"+RundomMobileNumber)
})

When("I fill The pin Code", () => {
    cy.xpath("//*[@data-index='0']").type(1)
    cy.xpath("//*[@data-index='1']").type(1)
    cy.xpath("//*[@data-index='2']").type(1)
    cy.xpath("//*[@data-index='3']").type(1)
})


When("I fill invalid pin Code", () => {
    cy.xpath("//*[@data-index='0']").type(0)
    cy.xpath("//*[@data-index='1']").type(0)

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

When("I fill invalid Password", () => {
    cy.wait(1000)
    cy.xpath("//*[@data-index='0']").type(1)
    cy.xpath("//*[@data-index='1']").type(1)
    cy.xpath("//*[@data-index='2']").type(1)

})


When("I fill ivalid Password", () => {
    cy.wait(1000)
    cy.xpath("//*[@data-index='0']").type(0)
    cy.xpath("//*[@data-index='1']").type(0)
    cy.xpath("//*[@data-index='2']").type(0)
    cy.xpath("//*[@data-index='3']").type(0)
    cy.xpath("//*[@data-index='4']").type(0)
    cy.xpath("//*[@data-index='5']").type(0)
})



Then("I should see {string}", (Text) => {
    cy.contains(Text)
})

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

When("I activate delivary option", () => {
    cy.xpath("//*[@type='checkbox'][@class='PrivateSwitchBase-input MuiSwitch-input muirtl-1m9pwf3']").click()
})
When("I fill the delivary price", () => {
    let RundomNumber = Math.floor(Math.random() * (100 - 900 + 1)) + 100;
    cy.xpath("//div[3]/div/textarea[@aria-label='maximum height']").type(RundomNumber)
})

When("I Attch product photo", () => {
    cy.xpath("//*[@id='picture']").selectFile('G:\TestICon.png')
})

When("I click on {string}", (Text) => {
   
    cy.contains(Text).click()
})

When("I accept terms and condtions", () => {
    cy.xpath("//*[@type='checkbox'][@data-indeterminate='false']").click()
})
When("I Enter my Mobile number {string}", (MobileNumber) => {
    cy.xpath("//*[@type='tel']").type(MobileNumber)
})
When("I Fill the First Name", () => {
    cy.xpath("//*[@id='firstName']").type("Automation")
})

When("I Fill the absher number", () => {
    cy.xpath("//*[@id='absher']").type(1234)
})
When("I click on confirm button", () => {
    cy.xpath("//*[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedSuccess MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButton-fullWidth muirtl-zg7xkn']").click()
})

When("I Refresh the page", () => {
    cy.wait(1000)
    cy.reload()
})




When("I Fill the Last Name", () => {
    cy.xpath("//*[@id='lastName']").type("Robot")
})

