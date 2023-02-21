
import { HomePage } from "../pages/homepage.page";
import { Login } from "../pages/login.page";
require('cypress-xpath');
const sender = new Login()
const homePage = new HomePage()
Cypress.Commands.add('login', () => {
    cy.visit('/login');
    sender.clickSenderOpts();
    sender.clickContinue();
    sender.typePhoneNumber()
    sender.clickContinue()
    sender.typePassWord()
    sender.clickSignIn()

})
Cypress.Commands.add('clickLink', (label) => {
    cy.get('a').contains(label).click()
})