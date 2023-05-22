import '@testing-library/cypress/add-commands'
import '../../../support/commands'
import { carrierRequest } from '../../../pages/CarrierRequest.page';
require('cypress-xpath');
const carrier =new carrierRequest()
const date = new Date()
const startTime = new Date(date.getTime() + 2*(1000 * 60 * 60 * 24));
const endTime = new Date(date.getTime() + 3*(1000 * 60 * 60 * 24));
const expireTime = new Date(date.getTime() + (1000 * 60 * 60 * 24));
describe('Test scripts carrier-request', () => {
    before('Login as carrier', () => {
        cy.carrierLogin()
    })
    it('Go to create request request', () => {
        carrier.clickToCreateRequest()
    });
    context('Carrier request', () => {
        beforeEach(function(){
            cy.fixture("carrier").then(carrierData => {
                this.carrierData= carrierData;
            })
        })
        it('Click to Close button should back to homepage', () => {
            carrier.general.closeBtn().click()
            cy.url().should('eq','https://dev.dev.cargolink.vn/carriers/home/')
            carrier.clickToCreateRequest()
        });
        it('All fields are mandatory', () => {
            carrier.general.sendBtn().click()
            carrier.warning.carNumberWarning().should('be.visible')
            carrier.warning.weightCarWarning().should('be.visible')
            carrier.warning.deliverFeeWarning().should('be.visible')
            carrier.warning.truckLoadWarning().should('be.visible')
            carrier.warning.startpointWarning().should('be.visible')
            carrier.warning.startTimeWarning().should('be.visible')
            carrier.warning.endPointWarning().should('be.visible')
            carrier.warning.expireTimeWarning().should('be.visible')
        });
        it('Weight car and deliver fee should be number', function(){
            carrier.carrier.weightCar().type('cannot text')
            carrier.carrier.weightCar().should('contain', '')
            carrier.carrier.deliverFee().type('cannot text')
            carrier.carrier.deliverFee().should('contain', '')
        });
        it('Warning should hide after import data to fields', function(){
            carrier.carrier.carNumber().type(this.carrierData.carNumber)
            carrier.carrier.carNumberOpts().click()
            carrier.warning.carNumberWarning().should('not.exist')
            carrier.carrier.weightCar().type(this.carrierData.weightCar)
            carrier.warning.weightCarWarning().should('not.exist')
            carrier.carrier.deliverFee().type(this.carrierData.deliverFee)
            carrier.warning.deliverFeeWarning().should('not.exist')
            carrier.carrier.lessTruckLoad().click()
            carrier.carrier.startPoint().type(this.carrierData.startPoint)
            carrier.carrier.suggestOpts().click()
            carrier.carrier.startTime().type(startTime.toLocaleDateString('en-GB') + '08:30')
            carrier.carrier.endPoint().type(this.carrierData.endPoint)
            carrier.carrier.suggestOpts().click()
            carrier.carrier.endTime().type(endTime.toLocaleDateString('en-GB') + '08:30')
            carrier.carrier.expireTime().type(expireTime.toLocaleDateString('en-GB') + '08:30')
        });
        it('Click to send should open confirm dialog', () => {
            carrier.clickToSend()
            carrier.carrier.OKBtn().should('exist')
            carrier.carrier.cancelBtn().should('exist')
        });
        it('Click to Cancel button to close confirm dialog', () => {
            carrier.general.cancelBtn().click()
            carrier.carrier.OKBtn().should('not.exist')
            carrier.carrier.cancelBtn().should('not.exist')
        });
        it('Click to OK button to create request', () => {
            carrier.clickToSend()
            // carrier.carrier.OKBtn().click()
            // cy.url().should('eq','https://dev.dev.cargolink.vn/carriers/freightOffer')
        });
    })
}); 