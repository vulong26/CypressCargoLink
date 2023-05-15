import { carrierLogin } from "../../pages/CarrierLogin.page";
import { consignorLogin } from "../../pages/ConsignorLogin.page";
require('cypress-xpath');
const carrierAccounts = require('../../fixtures/accountData.json');
const carrier = new carrierLogin()
const consignor = new consignorLogin()
describe('Test data account', function(){
    beforeEach(function(){
        cy.visit('/login')
    })
    carrierAccounts.forEach((data: any) => {
        if(data.type == 'carrier'){
            it(`Login with ${data.name} account`, function(){
                carrier.elements.carrierOpts().click()
                carrier.clickContinue()
                carrier.elements.phoneTextBox().type(data.phoneNumber)
                carrier.clickContinue()
                carrier.elements.passwordTextBox().type(data.password)
                carrier.clickSignIn()
                cy.url().should('eq', 'https://dev.dev.cargolink.vn/carriers/home')
            });
        }
        else{
            it(`Login as ${data.type} with ${data.name} account`, function(){
                consignor.elements.consignorOpts().click()
                carrier.clickContinue()
                carrier.elements.phoneTextBox().type(data.phoneNumber)
                carrier.clickContinue()
                carrier.elements.passwordTextBox().type(data.password)
                carrier.clickSignIn()
                cy.url().should('eq', 'https://dev.dev.cargolink.vn/shippers/home')
            });
        }

    })
})