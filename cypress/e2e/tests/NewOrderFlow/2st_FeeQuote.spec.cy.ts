import '@testing-library/cypress/add-commands'
import '../../../support/commands'
const date = new Date()
const expireTime = new Date(date.getTime() + (1000 * 60 * 60 * 24));
require('cypress-xpath');
describe('Quote fee for transport', () => {
    before('login', () => {
        cy.carrierLogin()    
})
    context('Complete fee quote', () => {  
        it('Search hang tim xe theo diem boc hang', () => {
            
        });      
    it('Request created', () => {
        cy.xpath('//a[contains(text(),"Hàng tìm xe")]').click()
        cy.get('.truck-type').find('p').contains('Tên hàng: Xi măng test').click()
        cy.xpath('//div[contains(text(),"Có hiệu lực đến")]/following-sibling::button').click()
        cy.xpath('//input[@aria-label="Phí vận chuyển"]').type('190000')
        cy.xpath('//div[contains(text(),"Loại xe")]/preceding-sibling::div').type('xe bán tải').wait(500)
        cy.xpath('//span[contains(text(),"Xe bán tải")]').click()
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

    it('Request accepted', () => {
        cy.visit('/shippers')
        cy.xpath('//div[contains(text(),"Quản lý đơn hàng")]').click()
        cy.xpath('//a[contains(text(),"Đơn hàng CargoLink")]').click()
        cy.location('href').should('equal', 'https://dev.dev.cargolink.vn/shippers/order-cgl')
        cy.get('tbody tr').first().find('td').eq(5).should('contain.text', 'Mới')
    });
    });

})