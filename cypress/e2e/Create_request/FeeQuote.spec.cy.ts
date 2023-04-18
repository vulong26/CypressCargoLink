import '@testing-library/cypress/add-commands'
import '../../support/commands'
require('cypress-xpath');
describe('Quote fee for transport', () => {
    before('login', () => {
        cy.carrierLogin()    
})
    context('alo', () => {
        it('request created', () => {
            cy.xpath('//a[contains(text(),"Hàng tìm xe")]').click()
            cy.get('tbody tr').find('td').contains('Chờ báo giá').click()
        });
        it('12', () => {
            
        });
    });

})