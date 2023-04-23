import '@testing-library/cypress/add-commands'
import '../../../support/commands'
import { CARRIERSLINK } from '../../../fixtures/constant';
require('cypress-xpath');

describe('Verify Carriers/Consigners homepage', () => {
    before('Clear cache', () => {
        cy.clearLocalStorage()
        cy.clearCookies();
    })
    context('Carriers', () => {
        it('Login as carrier', () => {
            cy.carrierLogin()
            cy.url().should('eq', 'https://dev.dev.cargolink.vn/carriers/home')
        });
        it('Side bar should have 7 items', () => {
            cy.xpath('//div[@class="list-group q-list"]').children().should('have.length', 7)
        });
        it('Renders links side bar items', () => {
            cy.xpath('//div[@class="list-group q-list"]').children().as('SidebarItems')
            
            cy.get('@SidebarItems').eq(1)
              .should('contains.text','Trang chủ')
              .and('have.attr', 'href', CARRIERSLINK.get('Trang chủ'))

            cy.get('@SidebarItems').eq(2)
              .should('contains.text','Hàng tìm xe')
              .and('have.attr', 'href', CARRIERSLINK.get('Hàng tìm xe'))

            cy.get('@SidebarItems').eq(3)
              .should('contains.text','Quản lý xe tìm hàng')
              .and('have.attr', 'href', CARRIERSLINK.get('Quản lý xe tìm hàng'))

            cy.get('@SidebarItems').eq(4)
              .should('contains.text','Quản lý báo giá')
              .and('have.attr', 'href', CARRIERSLINK.get('Quản lý báo giá')) 

            cy.get('@SidebarItems').eq(5)
              .should('contains.text','Quản lý đơn hàng')
              .and('have.attr', 'href', CARRIERSLINK.get('Quản lý đơn hàng'))

            cy.xpath("//div[contains(text(),'Quản lý hồ sơ')]").click()
            cy.contains('a', 'Hồ sơ')
              .should('have.attr', 'href', CARRIERSLINK.get('Hồ sơ'))
            cy.contains('a', 'Danh sách xe tải')
              .should('have.attr', 'href', CARRIERSLINK.get('Danh sách xe tải'))
            cy.contains('a', 'Danh sách lái xe')
              .should('have.attr', 'href', CARRIERSLINK.get('Danh sách lái xe'))
        });
        it('Upgrate feature should exist with normal account', () => {
            cy.get('.box-upgrade-account').find('span')
              .should('contain.text', 'Nâng cấp').click()
            cy.get('.box-account-upgrade').should('exist')
            cy.get('.box-account-upgrade').children().should('have.length', '2')
            cy.get('.button-dis-select').should('contain.text', 'Đang sử dụng')
        });
        it('Should have two upgrate options', () => {
            cy.get('.box-list-extension-main').next().children().should('have.length', 2)
            cy.xpath("//span[contains(text(),'Một đội xe')]").click()
            cy.xpath('//span[contains(text(),"Bị hủy")]').click()
            cy.xpath("//span[contains(text(),'Nhiều đội xe')]").click()
            cy.xpath('//span[contains(text(),"Bị hủy")]').click()
        });
        it('Click to compare account links should direct to compare page', () => {
            cy.get('.show-link-page').find('a')
              .should('contain.text', '(So sánh chức năng tài khoản)')
              .and('have.attr', 'href', CARRIERSLINK.get('So sánh tài khoản'))
            cy.get('.show-close').click()
        });
        it('Click to menu button to close and open side bar', () => {
            cy.get('#menu-button').click()
            cy.xpath('//div[@class="list-group q-list"]').should('not.be.visible')
            cy.get('#menu-button').click()
            cy.xpath('//div[@class="list-group q-list"]').should('exist')
        });
        it('Select display dashboard', () => {
            cy.xpath('//span[contains(text(),"Chuyến hàng")]').click()
            cy.get('.q-virtual-scroll__content').children().as('dashboardMenu').should('have.length', 4)
            cy.get('@dashboardMenu').eq(0).find('div .q-item__label')
              .should('have.text', 'Chuyến hàng')

            cy.get('@dashboardMenu').eq(1).find('div .q-item__label')
              .should('have.text', 'Báo cáo về báo giá')

            cy.get('@dashboardMenu').eq(2).find('div .q-item__label')
              .should('have.text', 'Báo cáo về xe tìm hàng')

            cy.get('@dashboardMenu').eq(3).find('div .q-item__label')
              .should('have.text', 'Báo cáo về đơn hàng')
        });
});
    // context('Consignor', () => {
    //     before('Clear cache', () => {
    //         cy.clearLocalStorage()
    //         cy.clearCookies();
    //     })
    //     it('visit to home page', () => {
    //         cy.visit('/login')
    //     });
    //     it('click to login button should direct to login page', () => {
    //         cy.url().should('eq', 'https://dev.dev.cargolink.vn/login')
    //     });
    //     it('should show two type-user-login options', () => {
    //         cy.get('.select-type-user-login').should('have.length', 2)
    //         consignor.elements.carrierOpts().should('be.visible')
    //         consignor.elements.consignorOpts().should('be.visible')
    //     });
    //     it('message error should display when not choose options', () => {
    //         consignor.clickContinue()
    //         consignor.elements.errorLogin().should('exist').and('have.text', 'Vui lòng chọn loại tài khoản bạn muốn đăng nhập')
    //         consignor.elements.consignorOpts().click()
    //         consignor.clickContinue()
    //     });
    //     it('phone number should exist in database', () => {
    //         consignor.elements.continueBtn().should('not.be.enabled')
    //         consignor.elements.phoneTextBox().type('only number')
    //         consignor.elements.phoneTextBox().should('have.text', '')
    //         consignor.elements.phoneTextBox().type('0123457862')
    //         consignor.clickContinue()
    //         consignor.elements.errorLogin().should('exist').and('have.text', 'Thông tin đăng nhập không đúng.')
           
    //     });
    //     it('direct to fill password when correct phone number', () => {
    //         consignor.elements.phoneTextBox().clear()
    //         consignor.typePhoneNumber()
    //         consignor.clickContinue()
    //         consignor.elements.passwordTextBox().should('exist')
    //     }); 
    //     it('error message should exist when type incorrect number', () => {
    //         consignor.elements.passwordTextBox().type('incorrectpw')
    //         consignor.clickSignIn()
    //         consignor.elements.errorLogin().should('exist').and('have.text', 'Thông tin đăng nhập không đúng.')
    //     });
    //     it('direct to consignor home page when type correct password', () => {
    //         consignor.elements.passwordTextBox().clear()
    //         consignor.typePassWord()
    //         consignor.clickSignIn()
    //         cy.url().should('eq', 'https://dev.dev.cargolink.vn/shippers/home')
    //     });
    // });
})
