import '@testing-library/cypress/add-commands'
import '../../../support/commands'
require('cypress-xpath');
const date = new Date()
const expireTime = new Date(date.getTime() + 0.5*(1000 * 60 * 60 * 24));
describe('Quote fee for transport', () => {
    before('login', () => {
        cy.carrierLogin()    
})
    context('alo', () => {
        it('request created', () => {
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
        it.only('12', () => {
            cy.consignorLogin()
            cy.xpath('//a[contains(text(),"Hàng tìm xe")]').click()
            cy.get('tbody tr').find('td').last().find('button').click()
            cy.xpath('//span[contains(text(),"Chấp nhận")]').click()
            cy.xpath('//span[contains(text(),"OK")]').click()

        });
    });

})