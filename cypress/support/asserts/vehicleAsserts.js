import { SELETORES } from '../seletores'

class VehicleAsserts {
    constructor() {
        this.sel = SELETORES.veiculo;
    }

    validarVeiculoCriado(nome, matricula) {
        cy.get(this.sel.conteudoVeiculos).should('be.visible');
        cy.get(this.sel.conteudoVeiculos).invoke('text').then(v => {
            const texto = v.replace(/\s+/g, ' ').trim();
            expect(texto).to.contain(nome);
            expect(texto).to.contain(matricula);
        })
    }

    validarVeiculoNaoVisivel(nome, matricula) {
        cy.get(this.sel.conteudoVeiculos).should('be.visible');
        cy.get(this.sel.conteudoVeiculos).invoke('text').then(v => {
            const texto = v.replace(/\s+/g, ' ').trim();
            expect(texto).not.to.contain(nome);
            expect(texto).not.to.contain(matricula);
        })
    }

    validarModalExclusao() {
        const textoEsperado = [
            'Delete vehicle',
            'You will no longer be able to park with this vehicle',
            'Are you sure you want to remove it?'
        ];

        cy.get(this.sel.popupApagar).should('be.visible');

        textoEsperado.forEach(texto => {
            cy.get(this.sel.popupApagar).should('contain', texto);
        })
    }

    validarModalExclusaoFechado() {
        cy.get(this.sel.popupApagar).should('not.be.visible');
    }
}

export default new VehicleAsserts()
