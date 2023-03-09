
import { HomePage } from "../pages/homepage.page";
import { Login } from "../pages/login.page";
require('cypress-xpath');
const consignor = new Login()
const homePage = new HomePage()
Cypress.Commands.add('login', () => {
    cy.visit('/login');
    consignor.clickSenderOpts();
    consignor.clickContinue();
    consignor.typePhoneNumber()
    consignor.clickContinue()
    consignor.typePassWord()
    consignor.clickSignIn()

})
Cypress.Commands.add('clickLink', (label) => {
    cy.get('a').contains(label).click()
})
Cypress.Commands.add('sendData', (element, keys) => {
    cy.get(element).type(keys)
})