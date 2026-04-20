import './commands'

beforeEach(() => {
    cy.visit('/')
    cy.setCookie('OptanonAlertBoxClosed', '2026-04-19T19:45:26.138Z', { domain: '.telpark.com' })
    cy.setCookie('OptanonConsent', 'isGpcEnabled=0&version=202403.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=29871516-ea19-448c-97e4-e00e41eea1c8&interactionCount=1&isAnonUser=1&landingPath=NotLandingPage&groups=C0002%3A1%2CC0001%3A1%2CC0003%3A1%2CC0004%3A1%2CV2STACK42%3A1', { domain: '.telpark.com' })
});

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});
