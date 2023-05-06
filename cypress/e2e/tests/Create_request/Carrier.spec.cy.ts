import '@testing-library/cypress/add-commands'
import '../../../support/commands'
import { carrierRequest } from '../../../pages/CarrierRequest.page';
require('cypress-xpath');
const carrier =new carrierRequest()
const date = new Date()
const startTime = new Date(date.getTime() + 2*(1000 * 60 * 60 * 24));
const endTime = new Date(date.getTime() + 3*(1000 * 60 * 60 * 24));
const expireTime = new Date(date.getTime() + (1000 * 60 * 60 * 24));
describe('Login successful', () => {
    before('login', () => {
        cy.carrierLogin()
    })
    it('go to create request request', () => {
        carrier.clickToCreateRequest()
    });
    describe('fill data for request', () => {
        it('information page', () => {
            carrier.carrier.carNumber().type('90C-01872')
            carrier.carrier.carNumberOpts().click()
            carrier.carrier.weightCar().type('20')
            carrier.carrier.deliverFee().type('1000000')
        });

        it('confirm request detail and expect fee', () => {
            carrier.carrier.lessTruckLoad().click()
            carrier.carrier.startPoint().type('10, Phố Phạm Văn Bạch, Cầu Giấy, Hà Nội')
            carrier.carrier.suggestOpts().click()
            carrier.carrier.startTime().type(startTime.toLocaleDateString('en-GB') + '08:30')
            carrier.carrier.endPoint().type('421 Xuân Đỉnh, Xuân Đỉnh, Bắc Từ Liêm, Hà Nội')
            carrier.carrier.suggestOpts().click()
            carrier.carrier.endTime().type(endTime.toLocaleString('en-GB') + '08:30')
            carrier.carrier.expireTime().type(expireTime.toLocaleString('en-GB') + '08:30')
        });
        it('confirm request detail and expect fee', () => {
            carrier.clickToSend()
            carrier.carrier.OKBtn().click()
        });
    })
}); 