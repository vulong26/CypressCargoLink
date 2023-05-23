import '@testing-library/cypress/add-commands'
import '../../support/commands'
import { carrierLogin } from '../../pages/CarrierLogin.page';
import { consignorLogin } from '../../pages/ConsignorLogin.page';
require('cypress-xpath');

describe('Login flow', () => {
    const carrier = new carrierLogin()
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
            carrier.clickLogin()
            cy.url().should('eq', 'https://cargolink.vn/login')
        });
        it('should show two type-user-login options', () => {
            cy.get('.select-type-user-login').should('have.length', 2)
            carrier.elements.carrierOpts().should('be.visible')
            carrier.elements.consignorOpts().should('be.visible')
        });
        it('message error should display when not choose options', () => {
            carrier.clickContinue()
            carrier.elements.errorLogin().should('exist').and('have.text', 'Vui lòng chọn loại tài khoản bạn muốn đăng nhập')
            carrier.elements.carrierOpts().click()
            carrier.clickContinue()
        });
        it('phone number should exist in database', () => {
            carrier.elements.continueBtn().should('not.be.enabled')
            carrier.elements.phoneTextBox().type('only number')
            carrier.elements.phoneTextBox().should('have.text', '')
            carrier.elements.phoneTextBox().type('0123456782')
            carrier.clickContinue()
            carrier.elements.errorLogin().should('exist').and('have.text', 'Thông tin đăng nhập không đúng.')
           
        });
        it('direct to fill password when correct phone number', () => {
            carrier.elements.phoneTextBox().clear()
            carrier.typePhoneNumber()
            carrier.clickContinue()
            carrier.elements.passwordTextBox().should('exist')
        }); 
        it('error message should exist when type incorrect number', () => {
            carrier.elements.passwordTextBox().type('incor#@$rectpw')
            carrier.clickSignIn()
            carrier.elements.errorLogin().should('exist').and('have.text', 'Thông tin đăng nhập không đúng.')
        });
        it('direct to carrier home page when type correct password', () => {
            carrier.elements.passwordTextBox().clear()
            carrier.typePassWord()
            carrier.clickSignIn()
            cy.url().should('eq', 'https://cargolink.vn/carriers/home')
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
            cy.url().should('eq', 'https://cargolink.vn/login')
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
            cy.url().should('eq', 'https://cargolink.vn/shippers/home')
        });
    });
})
