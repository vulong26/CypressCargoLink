import '@testing-library/cypress/add-commands'
import '../../../support/commands'
import { consignorRequest } from '../../../pages/ConsignorRequest.page';
require('cypress-xpath');
const data =new consignorRequest()
const date = new Date()
const loadingDate = new Date(date.getTime() + 3*(1000 * 60 * 60 * 24));
const deliveryDate = new Date(date.getTime() + 4*(1000 * 60 * 60 * 24));
const expireTime = new Date(date.getTime() + 2*(1000 * 60 * 60 * 24));

describe('Create Consignor request', () => {
    before('Login as consignor', () => {
        cy.consignorLogin()
    })
    context('Contact information page', () => {
        beforeEach(function(){
            cy.fixture("consignor").then(consignor => {
                this.consignor= consignor;
            })
        })
        it('Click button to start create request', () => {
            data.clickToCreateRequest() 
        });
        it('Should not go to next page when mandatory fields empty', () => {
            data.clickToContinue()
            data.warning.quantityWarning().should('exist')
            data.warning.typeCargoWarning().should('exist')
            data.warning.unitSBWarning().should('exist')
            data.warning.weightWarning().should('exist')
        });
        it('Fill data for contact page', function(){
            data.contact.nameCargoTB().type(this.consignor.cargoName)
            data.contact.typeCargoSB().click()
            data.contact.typeOpts().click()
            data.contact.unitSB().click()
            data.contact.unitOpts().click()
            data.contact.quantityTB().type(this.consignor.quantity)
            data.contact.weightTB().type(this.consignor.weight)
        });
        it('loading information page', function(){
            data.clickToContinue()
            data.loading.loadingAddressTB().type(this.consignor.loadingAddress)
            data.loading.suggestionAddress().click()
            data.loading.locationDetailTB().type(this.consignor.locationDetail)
            data.loading.loadingTimeTB().type('08:30')
            data.loading.loadingDayTB().type(loadingDate.toLocaleDateString('en-GB'))
            data.loading.contactNameTB().type(this.consignor.contacName)
            data.loading.contactNumberTB().type(this.consignor.contactNumber)

        });
        it('Could be create new delivery point when quantity less', () => {
            
        });
        it('delivery information page', function(){
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
        it('confirm request detail and expect fee', function(){
            data.clickToContinue()
            data.general.validTimeTB().type('10:30')
            data.general.validDayTB().type(expireTime.toLocaleDateString('en-GB'))
            data.general.expectValueTB().type(this.consignor.expectValue)
            data.general.sendRequestBtn().click()
            // data.general.okBtn().click()
        });
        it('verify request created successfully', () => {
            
        });
        
    })
});
