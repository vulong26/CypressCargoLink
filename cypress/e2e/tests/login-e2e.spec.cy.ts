
import { HomePage } from "../../pages/homepage.page";
import { Login } from "../../pages/login.page";
import '@testing-library/cypress/add-commands'
import '../../support/commands'
require('cypress-xpath');

describe('Login successful', () => {
    it('visit to login page', () => {
        cy.visit('')
        cy.login()
    });
    it('menu should show two type-user-login options', () => {
        
    });
    it('message error should display when not choose option', () => {
        
    });
    it('continue button should be disable', () => {
        
    });
    it('phone number textbox only accept 10 number', () => {
        
    });
})
