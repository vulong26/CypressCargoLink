import { consignorLogin } from '../pages/ConsignorLogin.page';
import { carrierLogin } from '../pages/CarrierLogin.page';
require('cypress-xpath');
const consignor = new consignorLogin()
const carrier = new carrierLogin()

Cypress.Commands.add('consignorLogin', () => {
    cy.clearLocalStorage()
    cy.clearCookies();
    cy.visit('/login');
    consignor.clickConsignorOpts();
    consignor.clickContinue();
    consignor.typePhoneNumber()
    consignor.clickContinue()
    consignor.typePassWord()
    consignor.clickSignIn()
})
Cypress.Commands.add('carrierLogin', () => {
    cy.clearLocalStorage()
    cy.clearCookies();
    cy.visit('/login');
    carrier.chooseCarrierOpts();
    carrier.clickContinue();
    carrier.typePhoneNumber()
    carrier.clickContinue()
    carrier.typePassWord()
    carrier.clickSignIn()
})
Cypress.Commands.add('clickLink', (label) => {
    cy.get('a').contains(label).click()
})
// Cypress.Commands.add('sendData', (element, keys) => {
//     cy.get(element).type(keys)
// })