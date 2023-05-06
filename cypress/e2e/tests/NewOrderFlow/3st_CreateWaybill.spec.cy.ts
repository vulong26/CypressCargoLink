import '@testing-library/cypress/add-commands'
import '../../../support/commands'
import { carrierRequest } from '../../../pages/CarrierRequest.page';
require('cypress-xpath');
const carrier =new carrierRequest()
describe('Create Waybill then send to drivers', () => {
    before('Login as carrier', () => {
        cy.carrierLogin()
    })

    describe('fill data for request', () => {
        it('Go to manage shipment', () => {
            cy.xpath('//div[@class="list-group q-list"]').children().eq(5).click()
        });
        it('Click to sort shipment with status new', () => {
            cy.get('.list-status >li').contains('Mới').click()
            cy.get('tbody tr').children().eq(5).find('span').should('contain.text', 'Mới').click()
            cy.wait(1000)
        });

        it('Click to create waybill', () => {
           cy.xpath('//span[contains(text(),"Tạo giấy vận chuyển")]').click()
           
        });
        it('confirm request detail and expect fee', () => {
            cy.xpath('//div[contains(text(),"Biển số xe")]/preceding-sibling::div').type('90C-01872')
            cy.get('.q-virtual-scroll__content').click()
            cy.xpath('//div[contains(text(),"Lái xe chính")]/preceding-sibling::div').type('Vũ Hoàng Huy')
            cy.xpath('//div[contains(text(),"Vũ Hoàng Huy")]').click()
            cy.xpath('//div[contains(text(),"Lái xe phụ")]/preceding-sibling::div').click()
            cy.xpath('//div[contains(text(),"Không cần lái phụ")]').click()
            cy.xpath('//div[contains(text(),"Lái xe đã xác nhận")]/preceding-sibling::div').click()
            cy.xpath('//span[contains(text(),"Gửi cho lái xe")]').click()
        });
    })
}); 