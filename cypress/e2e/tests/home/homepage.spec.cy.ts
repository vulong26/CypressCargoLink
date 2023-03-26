
require('cypress-xpath');
before('reset data', () => {
    cy.clearCookies()
    cy.clearAllLocalStorage()
})
it('visit to cargolink home page', () => {
    cy.visit('')
});
it('header top should show 5 items', () => {
    cy.xpath('//div[@class="top-contact"]').find('a').should('have.length', 2)
    cy.xpath('//ul[@class="topmenu"]').find('li').should('have.length', 3)
});
it('contact support 3 items', () => {
    cy.xpath('//div[@class="top-contact"]').find('a').eq(0).should('contain', ' info@cargolink.vn')
    cy.xpath('//div[@class="top-contact"]').find('a').eq(1).should('contain', '0394.945.855')

});
it('cargolink support 2 language', () => {
    cy.xpath('//span[contains(text(), "Tiếng Việt")]').should('exist')
    cy.xpath('//span[contains(text(), "Tiếng Anh")]').should('exist')
});
it('header bottom should show 4 items', () => {
    cy.get('#primary-menu').find('li').should('have.length', 4)
});
it('click to header bottom items should direct to correspond features ', () => {
    cy.get('#primary-menu').find('span').contains('Trang chủ').click()
    cy.url().should('eq', 'https://dev.dev.cargolink.vn/')
    cy.get('#primary-menu').find('span').contains('Người gửi hàng').click()
    cy.url().should('eq', 'https://dev.dev.cargolink.vn/cargolink-shipper')
    cy.wait(1000)
    cy.go('back')
    cy.get('#primary-menu').find('span').contains('Người vận tải').click()
    cy.url().should('eq', 'https://dev.dev.cargolink.vn/cargolink-carrier')
    cy.wait(1000)
    cy.go('back')
    cy.get('#primary-menu').find('span').contains('Giới thiệu').click()
    cy.url().should('eq', 'https://dev.dev.cargolink.vn/pages/about-us')
    cy.wait(1000)
    cy.go('back')
});
it('login and logout should visible to click', () => {
    cy.xpath('//span[contains(text(), "Đăng nhập")]').should('be.visible')
    cy.xpath('//span[contains(text(), "Đăng ký")]').should('exist')
});
