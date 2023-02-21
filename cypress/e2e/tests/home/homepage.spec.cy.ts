import { HomePage } from "../../../pages/homepage.page";
import { Login } from "../../../pages/login.page";
const sender = new Login()
const homePage = new HomePage()
it('visit to cargolink home page', () => {
    cy.visit('')
});
it('Move to login by user', () => {

    homePage.clickLogin();
});
it('Login by sender successful', () => {

});
