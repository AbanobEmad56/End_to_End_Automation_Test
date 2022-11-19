// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import {PAGES_PREFIX} from '../utlis/types'
import {getSlug} from "../utlis/slugs";

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

Cypress.on("window:load", (win) => {
    console.log(win)
    if(win.mixpanel) {
        cy.spy(win.mixpanel.track).as('mixpanel')
    }

})

Cypress.Commands.add("getByPlaceholder", (placeholder) => {
    return cy.get(`[placeholder="${placeholder}"]`)
})

Cypress.Commands.add("getByType", (type) => {
    return cy.get(`[type="${type}"]`)
})

Cypress.Commands.add("containsText", (text) => {
    return cy.contains(new RegExp(text))
})



Cypress.Commands.add("goToPage", (page, slugType) => {
    const slug = getSlug(slugType)
    cy.visit(`${page}/${slug}`)
})

Cypress.Commands.add("checkMixpanelEvent", (eventName) => {
    cy.get("@mixpanel").should("have.been.calledWith", eventName)
})