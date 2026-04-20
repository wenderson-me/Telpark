import { SELETORES } from '../seletores'

class LoginAsserts {
    constructor() {
        this.sel = SELETORES.login;
        this.selPrincipal = SELETORES.principal;
    }

    validarErro(mensagem) {
        cy.get(this.sel.textoErro).should('have.text', mensagem);
    }

    validarErroVisivel() {
        cy.get(this.sel.alerta).should('be.visible');
    }

    validarPaginaPrincipal() {
        cy.url('include', '/parking_pass');
        cy.get(this.selPrincipal.cabecalho).should('be.visible');
        cy.get(this.selPrincipal.logout).should('be.visible');
    }
}

export default new LoginAsserts()
