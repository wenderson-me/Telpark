import loginPage from '../support/pages/login/login'
import parkingPage from './pages/parking/parking'

Cypress.Commands.add('login', function () {
    loginPage.fazerLogin(Cypress.env('testEmail'), Cypress.env('testPassword'));
    parkingPage.validarElementosPaginaPrincipal();
})