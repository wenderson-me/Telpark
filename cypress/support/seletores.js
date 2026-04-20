// Seletores centralizados para toda a aplicação

export const SELETORES = {
  login: {
    email: '#username',
    senha: '#password',
    botaoLogin: '#kc-login',
    textoErro: '.alert .kc-feedback-text',
    alerta: '.alert'
  },
  principal: {
    botaoAceitarCookies: '#onetrust-accept-btn-handler',
    logout: '#aLogout',
    cabecalho: '#mainHeader',
    abaVeiculos: '.veiculos'
  },
  veiculo: {
    nomeVeiculo: '.span2.bg.vehicles .topVehicle span',
    matriculaVeiculo: '.span2.bg.vehicles .matricula span',
    adicionarVeiculo: '#aNewVehicle',
    conteudoVeiculos: '#vehiclesMainContent',
    formulario: 'form.add-car',
    inputNome: 'input[name="comment"]',
    inputMatricula: 'input[name="plate"]',
    selectPais: 'select[name="type"]',
    botaoGuardar: 'a.btn-success.vehiclebtnbig',
    cardVeiculo: '#vehicles > div',
    botaoEditar: 'a[href*="aEdit"]',
    botaoDeletarCard: 'a[href*="btnDelete"]',
    popupApagar: '#deleteConfirmModal',
    botaoRemoverPopup: 'a[href*="deleteButton"]'
  }
}