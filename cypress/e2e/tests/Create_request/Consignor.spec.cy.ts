import '@testing-library/cypress/add-commands'
import '../../../support/commands'
import { consignorRequest } from '../../../pages/ConsignorRequest.page';
require('cypress-xpath');
const data =new consignorRequest()
describe('Login successful', () => {
    before('login', () => {
        cy.consignorLogin()
    })

    describe('fill data for request', () => {
        it('go to create request request', () => {
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
    })
}); 