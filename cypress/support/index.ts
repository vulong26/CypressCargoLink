


import './commands'

import './assertions'

import '@testing-library/cypress/add-commands'

import { configure } from '@testing-library/cypress'
import { Login } from '../pages/login.page';




configure({ testIdAttribute: 'data-test-id' })



/// <reference types="cypress" />

declare global {

    namespace Cypress {

        interface Chainable {

            /**
      
             * Custom command to run SUDS-CLI upload-scratch command.
      
             * @param options upload options {docId, releaseTicket}.
      
             */

            login: () => Chainable<Element>
            navigatePage: () => Chainable<Element>
            clickLink: (label: string) => Chainable<Element>

        }

    }

}



Cypress.on('uncaught:exception', () => {

    return false

})




