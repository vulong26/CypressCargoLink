import '@testing-library/cypress/add-commands'
import '../../../support/commands'
import { consignorRequest } from '../../../pages/ConsignorRequest.page';
require('cypress-xpath');
const data =new consignorRequest()
describe('Login successful', () => {
    before('login', () => {
        cy.consignorLogin()
        cy.intercept('GET', '/api/v1/shippers/getShipperById/').as('getShipper')
    })

    describe('fill data for request', () => {
        it('go to create request request', () => {
            cy.wait('@getShipper')
            data.clickToCreateRequest()
            
        });
        it('contact information page', () => {
            data.fillContactInformation()
        });
        it('loading information page', () => {
            data.fillLoadingInformation()
        });
        it('delivery information page', () => {
            data.fillDeliveryInformation()
        });
        it('confirm request detail and expect fee', () => {
            data.confirmRequestData()
        });
        it('confirm request detail and expect fee', () => {
        });
    })
}); 