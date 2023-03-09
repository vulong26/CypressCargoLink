import '@testing-library/cypress/add-commands'
import '../../../support/commands'
import { CreateRequest } from '../../../pages/create-request.page';
require('cypress-xpath');
const data =new CreateRequest()
describe('Login successful', () => {
    before('login', () => {
        cy.login()
    })
    it('go to create request request', () => {
        data.clickToCreateRequest()
    });
    describe('fill data for request', () => {
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