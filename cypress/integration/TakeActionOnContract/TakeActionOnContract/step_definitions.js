import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import 'cypress-iframe';
let RundomNumber = Math.floor(Math.random() * (1 - 100000 + 1)) + 1;
let ContactURL ;


When("I fill in item Name", () => {
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

When("open added contract", () => {
    const text = "Test Product By Automation"+RundomNumber
    cy.contains(text).click()


})

When("Save Contact link", () => {
    cy.xpath("//*[contains(text(),'نسخ رابط المعاملة')]").click();
    cy.location('href')      
    .then((text) => {
    ContactURL = text.toString()
    });
    
})
When("Logout from Profile", () => {
    cy.xpath("//*[@class='MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-edgeEnd MuiIconButton-sizeLarge muirtl-1dmadst']").click()
    cy.xpath("//*[@data-testid='LogoutIcon']").click()

});


When("Open contract page", () => {
    cy.wait(2000)
     //cy.visit(ContactURL,{failOnStatusCode: false})
     cy.visit('https://app-dev.waffyapp.com/contract/636c0dcf5fe31316fe2fb5b5',{failOnStatusCode: false})
     

});

When("choose payment method", () => {
    cy.xpath("//*[@src='../../../assets/images/svg/visa.svg']").click();
    cy.wait(2000)
    cy.xpath("//*[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium styles_container__Uvkfq styles_default__oGBPz muirtl-z5kltp'][@style='opacity: 1;']").click({force:true});
})

When("I Confirm Payment", () => {

    cy.xpath("//*[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium styles_container__Uvkfq styles_default__oGBPz muirtl-z5kltp'][contains(text(),'تأكيد')]").click({force:true});
})

When("I enter payment details", () => {
    cy.wait(5000)
    cy.xpath("//iframe[@class='wpwl-control wpwl-control-iframe wpwl-control-cardNumber']").its('0.contentDocument.body').then(cy.wrap).find('form > input[autocomplete=cc-number]').click().type(4111111111111111,{force: true})
    cy.xpath("//*[@data-action='blur-card-expiry']").type(1225)
    cy.xpath("//*[@name='card.holder']").type("Abanob Emad")
    cy.xpath("//iframe[@name='card.cvv']").type(123)
    cy.xpath("//iframe[@class='wpwl-control wpwl-control-iframe wpwl-control-cvv']").its('0.contentDocument.body').then(cy.wrap).find('form > input[placeholder="رمز التحقق (CVV)"]').click().type(123,{force: true})
    cy.xpath("//*[@aria-label='إدفع الأن']").click()
    cy.wait(10000)
    cy.frameLoaded('iframe.wpwl-target').its('0.contentDocument.body').then(cy.wrap).find("input[type=submit]").invoke('attr','target','_self').click({force: true}).wait(10000);
    cy.wait(30000)



// cy.wait(10000)
//  cy.xpath("//input[@type='checkbox'][@name='selectSplitAuthResult']").tab()
})


