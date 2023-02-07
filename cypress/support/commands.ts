
import { HomePage } from "../pages/homepage.page";
import { Login } from "../pages/login.page";
require('cypress-xpath');
const sender = new Login()
const homePage = new HomePage()
Cypress.Commands.add('login', () => {
    cy.navigatePage()
    homePage.clickLogin();
    sender.clickSenderOpts();
    sender.clickContinue();
    sender.typePhoneNumber()
    sender.clickContinue()
    sender.typePassWord()
    sender.clickSignIn()

})
Cypress.Commands.add('navigatePage', () => {
    cy.visit('https://dev.dev.cargolink.vn/')
})
Cypress.Commands.add('clickLink', (label) => {
    cy.get('a').contains(label).click()
})