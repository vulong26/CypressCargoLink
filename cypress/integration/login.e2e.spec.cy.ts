/// <reference types="cypress" />

import { HomePage } from "../pages/homepage.page";
import { Login } from "../pages/login.page";
import '@testing-library/cypress/add-commands'
require('cypress-xpath');
const sender = new Login()
const homePage = new HomePage()

describe('Home page screen', () => {
    it('visit to Cargolink homepage', () => {
        cy.navigatePage()
    })
    it('login', () => {
        cy.login()
    });
})
