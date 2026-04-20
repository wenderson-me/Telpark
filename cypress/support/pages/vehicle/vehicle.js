import { SELETORES } from '../../seletores'
import loginPage from '../login/login'
import parkingPage from '../parking/parking'
import vehicleAsserts from '../../asserts/vehicleAsserts'

class VehiclePage {

    constructor() {
        this.loginPage = loginPage;
        this.parkingPage = parkingPage;
        this.asserts = vehicleAsserts;
        this.sel = SELETORES.veiculo;
    }

    acessar() {
        cy.login();
        this.parkingPage.clicarAbaVeiculos();
        cy.url('include', '/vehicles');
        cy.get(this.sel.conteudoVeiculos).should('be.visible');
    }

    interceptarCriacaoVeiculo() {
        cy.intercept("POST", "**/vehicles?**").as("pageResponse");
    }

    adicionarVeiculo(nome, matricula, pais) {
        this.interceptarCriacaoVeiculo();
        cy.get(this.sel.adicionarVeiculo).click();
        cy.get(this.sel.formulario).should('be.visible');
        this.preencherFormularioVeiculo(nome, matricula, pais);
        cy.get(this.sel.botaoGuardar).should('be.visible').click();
        cy.wait('@pageResponse');
        cy.get(this.sel.formulario).should('not.be.visible');
    }

    criarVeiculo(nome, matricula, pais) {
        cy.get(this.sel.conteudoVeiculos).then(($content) => {
            const veiculoExiste = $content.find(this.sel.matriculaVeiculo).filter((i, el) => el.innerText.trim() === matricula).length > 0;

            if (!veiculoExiste) {
                this.adicionarVeiculo(nome, matricula, pais);
                this.validarVeiculoCriado(nome, matricula);
            } else {
                cy.log(`Veículo com matrícula ${matricula} já existe.`);
            }
        });
    }

    preencherFormularioVeiculo(nome, matricula, pais) {
        cy.get(this.sel.inputNome).type(nome);
        cy.get(this.sel.inputMatricula).type(matricula);
        cy.get(this.sel.selectPais).select(pais);

    }

    validarVeiculoCriado(nome, matricula) {
        this.asserts.validarVeiculoCriado(nome, matricula);
    }

    validarVeiculoNaoVisivel(nome, matricula) {
        this.asserts.validarVeiculoNaoVisivel(nome, matricula);
    }

    obterDadosPrimeiroVeiculo() {
        return cy.get(this.sel.cardVeiculo).first().then($card => {
            return {
                nome: $card.find(this.sel.nomeVeiculo).text().trim(),
                matricula: $card.find(this.sel.matriculaVeiculo).text().trim()
            };
        });
    }

    obterPrimeiroNomeVeiculo() {
        return cy.get(this.sel.nomeVeiculo).first().then($nome => {
            return $nome.text();
        })
    }

    obterPrimeiraMatriculaVeiculo() {
        return cy.get(this.sel.matriculaVeiculo).first().then($matricula => {
            return $matricula.text();
        })
    }

    deletarVeiculo() {
        cy.get(this.sel.cardVeiculo).first().find(this.sel.botaoEditar).click();
        cy.get(this.sel.cardVeiculo).first().find(this.sel.botaoDeletarCard).click();
        this.asserts.validarModalExclusao();
        cy.get(this.sel.botaoRemoverPopup).click();
        this.asserts.validarModalExclusaoFechado();
    }
}

export default new VehiclePage()