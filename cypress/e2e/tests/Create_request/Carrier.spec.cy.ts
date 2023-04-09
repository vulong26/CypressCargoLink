import '@testing-library/cypress/add-commands'
import '../../../support/commands'
import { carrierRequest } from '../../../pages/CarrierRequest.page';
require('cypress-xpath');
const carrier =new carrierRequest()
describe('Login successful', () => {
    before('login', () => {
        cy.carrierLogin()
    })
    it('go to create request request', () => {
        carrier.clickToCreateRequest()
    });
    describe('fill data for request', () => {
        it('information page', () => {
            carrier.fillContactInformation()
        });

        it('confirm request detail and expect fee', () => {
           
        });
        it('confirm request detail and expect fee', () => {
            
        });
    })
}); 