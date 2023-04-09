import '@testing-library/cypress/add-commands'
import '../../support/commands'
import { carrierLogin } from '../../pages/carrierLogin.page';
import { consignorLogin } from '../../pages/consignorLogin.page';
require('cypress-xpath');

describe('Login flow', () => {
    const user = new carrierLogin()
    const consignor = new consignorLogin()
    before('Clear cache', () => {
        cy.clearLocalStorage()
        cy.clearCookies();
    })
    context('Carriers', () => {
        it('visit to home page', () => {
            cy.visit('')
        });
        it('click to login button should direct to login page', () => {
            user.clickSignIn()
            cy.url().should('eq', 'https://dev.dev.cargolink.vn/login')
        });
        it('should show two type-user-login options', () => {
            cy.get('.select-type-user-login').should('have.length', 2)
            user.elements.carrierOpts().should('be.visible')
            user.elements.consignorOpts().should('be.visible')
        });
        it('message error should display when not choose options', () => {
            user.clickContinue()
            user.elements.errorLogin().should('exist').and('have.text', 'Vui lòng chọn loại tài khoản bạn muốn đăng nhập')
            user.elements.carrierOpts().click()
            user.clickContinue()
        });
        it('phone number should exist in database', () => {
            user.elements.continueBtn().should('not.be.enabled')
            user.elements.phoneTextBox().type('only number')
            user.elements.phoneTextBox().should('have.text', '')
            user.elements.phoneTextBox().type('0123456782')
            user.clickContinue()
            user.elements.errorLogin().should('exist').and('have.text', 'Thông tin đăng nhập không đúng.')
           
        });
        it('direct to fill password when correct phone number', () => {
            user.elements.phoneTextBox().clear()
            user.typePhoneNumber()
            user.clickContinue()
            user.elements.passwordTextBox().should('exist')
        }); 
        it('error message should exist when type incorrect number', () => {
            user.elements.passwordTextBox().type('incorrectpw')
            user.clickSignIn()
            user.elements.errorLogin().should('exist').and('have.text', 'Thông tin đăng nhập không đúng.')
        });
        it('direct to carrier home page when type correct password', () => {
            user.elements.passwordTextBox().clear()
            user.typePassWord()
            user.clickSignIn()
            cy.url().should('eq', 'https://dev.dev.cargolink.vn/carriers/home')
        });
    });
    context('Consignor', () => {
        before('Clear cache', () => {
            cy.clearLocalStorage()
            cy.clearCookies();
        })
        it('visit to home page', () => {
            cy.visit('/login')
        });
        it('click to login button should direct to login page', () => {
            cy.url().should('eq', 'https://dev.dev.cargolink.vn/login')
        });
        it('should show two type-user-login options', () => {
            cy.get('.select-type-user-login').should('have.length', 2)
            consignor.elements.carrierOpts().should('be.visible')
            consignor.elements.consignorOpts().should('be.visible')
        });
        it('message error should display when not choose options', () => {
            consignor.clickContinue()
            consignor.elements.errorLogin().should('exist').and('have.text', 'Vui lòng chọn loại tài khoản bạn muốn đăng nhập')
            consignor.elements.consignorOpts().click()
            consignor.clickContinue()
        });
        it('phone number should exist in database', () => {
            consignor.elements.continueBtn().should('not.be.enabled')
            consignor.elements.phoneTextBox().type('only number')
            consignor.elements.phoneTextBox().should('have.text', '')
            consignor.elements.phoneTextBox().type('0123457862')
            consignor.clickContinue()
            consignor.elements.errorLogin().should('exist').and('have.text', 'Thông tin đăng nhập không đúng.')
           
        });
        it('direct to fill password when correct phone number', () => {
            consignor.elements.phoneTextBox().clear()
            consignor.typePhoneNumber()
            consignor.clickContinue()
            consignor.elements.passwordTextBox().should('exist')
        }); 
        it('error message should exist when type incorrect number', () => {
            consignor.elements.passwordTextBox().type('incorrectpw')
            consignor.clickSignIn()
            consignor.elements.errorLogin().should('exist').and('have.text', 'Thông tin đăng nhập không đúng.')
        });
        it('direct to consignor home page when type correct password', () => {
            consignor.elements.passwordTextBox().clear()
            consignor.typePassWord()
            consignor.clickSignIn()
            cy.url().should('eq', 'https://dev.dev.cargolink.vn/shippers/home')
        });
    });
})
