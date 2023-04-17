import '@testing-library/cypress/add-commands'
import '../../../support/commands'
import { consignorRequest } from '../../../pages/ConsignorRequest.page';
require('cypress-xpath');
const data =new consignorRequest()
const date = new Date()
const expireTime = new Date(date.getTime() + 0.5*(1000 * 60 * 60 * 24));

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
        it('request created', () => {
            cy.carrierLogin() 
            cy.xpath('//a[contains(text(),"Hàng tìm xe")]').click()
            cy.get('.truck-type').click()
            cy.xpath('//div[contains(text(),"Có hiệu lực đến")]/following-sibling::button').click()
            cy.xpath('//input[@aria-label="Phí vận chuyển"]').type('190000')
            cy.xpath('//div[contains(text(),"Loại xe")]/preceding-sibling::div').type('xe bán tải')
            cy.xpath('//span[contains(text(),"Xe bán tải")]').click()
            cy.xpath('//div[contains(text(),"Loại xe")]/preceding-sibling::div').click()
            cy.xpath('//input[@aria-label="Có giá trị đến"]').type(expireTime.toLocaleString('en-GB'))
            cy.xpath('//span[contains(text(),"Gửi")]').click()
        });
        it('Accept fee', () => {
            cy.consignorLogin()
            cy.xpath('//a[contains(text(),"Hàng tìm xe")]').click()
            cy.xpath('//span[contains(text(),"Đã báo giá")]/parent::td//following-sibling::td/button').click()
            cy.xpath('//span[contains(text(),"Chấp nhận")]').click()
            cy.xpath('//span[contains(text(),"OK")]').click()
        });
    })
}); 