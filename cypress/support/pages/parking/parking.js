import { SELETORES } from '../../seletores'
import parkingAsserts from '../../asserts/parkingAsserts'

class ParkingPage {
    constructor() {
        this.asserts = parkingAsserts;
        this.sel = SELETORES.principal;
    }

    validarElementosPaginaPrincipal() {
        this.asserts.validarElementosPaginaPrincipal();
    }

    clicarAbaVeiculos() {
        cy.get(this.sel.abaVeiculos).click();
    }
}

export default new ParkingPage()