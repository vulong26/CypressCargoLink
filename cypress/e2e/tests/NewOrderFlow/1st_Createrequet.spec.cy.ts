import '@testing-library/cypress/add-commands'
import '../../../support/commands'
import { consignorRequest } from '../../../pages/ConsignorRequest.page';
require('cypress-xpath');
const data =new consignorRequest()
const date = new Date()
const loadingDate = new Date(date.getTime() + 3*(1000 * 60 * 60 * 24));
const deliveryDate = new Date(date.getTime() + 4*(1000 * 60 * 60 * 24));
const expireTime = new Date(date.getTime() + 2*(1000 * 60 * 60 * 24));

describe('Login successful', () => {
    before('Login as consignor', () => {
        cy.consignorLogin()
    })
    context('Fill data for request', () => {
        beforeEach(function(){
            cy.fixture("consignor").then(consignor => {
                this.consignor= consignor;
            })
        })
        it('Go to create request request', () => {
            data.clickToCreateRequest() 
        });
       
        it('Thong toan phi tai and Hinh thuc giao hang are default data', () => {
            
        });
        it('Do not allow to "Thông tin bốc hàng" page when blank fileds manatory', () => {
            
        });
        it('Import data for contact information page', function(){
            data.contact.nameCargoTB().type(this.consignor.cargoName)
            data.contact.typeCargoSB().click()
            data.contact.typeOpts().click()
            data.contact.unitSB().click()
            data.contact.unitOpts().click()
            data.contact.quantityTB().type(this.consignor.quantity)
            data.contact.weightTB().type(this.consignor.weight)

        });
        it('Import data for loading information page', function(){
            data.clickToContinue()
            data.loading.loadingAddressTB().type(this.consignor.loadingAddress)
            data.loading.suggestionAddress().click()
            data.loading.locationDetailTB().type(this.consignor.locationDetail)
            data.loading.loadingTimeTB().type('08:30')
            data.loading.loadingDayTB().type(loadingDate.toLocaleDateString('en-GB'))
            data.loading.contactNameTB().type(this.consignor.contacName)
            data.loading.contactNumberTB().type(this.consignor.contactNumber)

        });
        it('Verify tong hang se boc are the same as thong tin don hang ', () => {
            
        });
        it('Import data for delivery information page', function(){
            data.clickToContinue()
            data.delivery.deliveryAddressTB().type(this.consignor.deliveryAddress)
            data.loading.suggestionAddress().click()
            data.delivery.deliveryDetailTB().type(this.consignor.deliveryDetail)
            cy.wait(2000)
            data.delivery.deliveryTimeTB().type('08:30')
            data.delivery.deliveryDayTB().type(deliveryDate.toLocaleDateString('en-GB'))
            data.delivery.contactDeliveryTB().type(this.consignor.contactDelivery)
            data.delivery.contactDeliveryNumberTB().type(this.consignor.contactDeliveryNumber)

        });
        it('User can cancel and update information thong tin don hang', () => {
            
        });
        it('Confirm request detail and expect fee', function(){
            data.clickToContinue()
            data.general.validTimeTB().type('10:30')
            data.general.validDayTB().type(expireTime.toLocaleDateString('en-GB'))
            data.general.expectValueTB().type(this.consignor.expectValue)
            data.general.sendRequestBtn().click()
            data.general.okBtn().click()
        });
        it('User can add many diem giao hang different', () => {
            
        });
        
        
    })
});
