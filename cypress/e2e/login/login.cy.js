import { gerarCredenciaisInvalidas } from '../../support/utils/factories'
import loginPage from '../../support/pages/login/login'

const credenciaisInvalidas = gerarCredenciaisInvalidas();
const mensagemErro = 'Invalid username or password.';

describe('Login', () => {

  context('Login com credenciais válidas', () => {
    it('Login com sucesso', () => {
      loginPage.fazerLogin(Cypress.env('testEmail'), Cypress.env('testPassword'));
      loginPage.parkingPage.validarElementosPaginaPrincipal();
    });
  });

  context('Credenciais inválidas', () => {
    it('Exibe erro ao preencher credenciais inválidas', () => {
      loginPage
        .fazerLogin(credenciaisInvalidas.email, credenciaisInvalidas.password)
        .validarErro(mensagemErro);
    });
  });

  context('Sem preencher as credenciais', () => {
    it('Exibe erro ao não preencher as credenciais', () => {
      loginPage
        .clicarBotaoLogin()
        .validarErro(mensagemErro);
    });
  });
});