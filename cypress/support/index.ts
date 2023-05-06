


import './commands'

import './assertions'

import '@testing-library/cypress/add-commands'

import { configure } from '@testing-library/cypress'
import { consignorLogin } from '../pages/ConsignorLogin.page';




configure({ testIdAttribute: 'data-test-id' })
const customCommands = require('./commands.ts')

module.exports = {
  commands: customCommands
}



/// <reference types="cypress" />

declare global {

    namespace Cypress {

        interface Chainable {

            /**
      
             * Custom command to run SUDS-CLI upload-scratch command.
      
             * @param options upload options {docId, releaseTicket}.
      
             */

            consignorLogin: () => Chainable<Element>
            carrierLogin: () => Chainable<Element>
            navigatePage: () => Chainable<Element>
            clickLink: (label: string) => Chainable<Element>
            // sendData: (keys,element: string) => Chainable<Element>

        }

    }

}
const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/

const reCapCha = /^[^Error: reCAPTCHA placeholder element must be an element or id]/
Cypress.on('uncaught:exception', (err) => {
    /* returning false here prevents Cypress from failing the test */
    if (resizeObserverLoopErrRe.test(err.message)) {
        return false
    }
    if (err.message.includes('reCAPTCHA placeholder element must be an element or id')) {
        return false
      }
})





