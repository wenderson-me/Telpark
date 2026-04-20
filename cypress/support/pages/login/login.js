import { SELETORES } from '../../seletores'
import ParkingPage from '../parking/parking'
import loginAsserts from '../../asserts/loginAsserts'

class LoginPage {
    constructor() {
        this.parkingPage = ParkingPage;
        this.asserts = loginAsserts;
        this.sel = SELETORES.login;
    }

    preencherEmail(email) {
        cy.get(this.sel.email).clear().type(email);
        return this
    }

    preencherPassword(password) {
        cy.get(this.sel.senha).clear().type(password);
        return this
    }

    clicarBotaoLogin() {
        cy.get(this.sel.botaoLogin).click();
        return this
    }

    fazerLogin(email, password) {
        return this.preencherEmail(email)
            .preencherPassword(password)
            .clicarBotaoLogin();
    }

    validarErro(mensagem) {
        this.asserts.validarErro(mensagem);
        return this
    }

    validarErroVisivel() {
        this.asserts.validarErroVisivel();
        return this
    }
}

export default new LoginPage()