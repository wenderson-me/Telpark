import { SELETORES } from '../seletores'

class ParkingAsserts {
    constructor() {
        this.sel = SELETORES.principal;
    }

    validarElementosPaginaPrincipal() {
        cy.url('include', '/parking_pass');
        cy.get(this.sel.cabecalho).should('be.visible');
        cy.get(this.sel.logout).should('be.visible');
    }
}

export default new ParkingAsserts()
