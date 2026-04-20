import { gerarVeiculo } from '../../support/utils/factories'
import vehiclePage from '../../support/pages/vehicle/vehicle'

describe('Veículos', () => {
    const vehicle = gerarVeiculo();

    beforeEach(() => {
        vehiclePage.acessar();
    });

    context('Adicionar um veículo', () => {
        afterEach(() => {
            vehiclePage.deletarVeiculo();
        });

        it('Veículo é adicionado com sucesso', () => {
            vehiclePage.adicionarVeiculo(vehicle.model, vehicle.registration, vehicle.country);
            vehiclePage.validarVeiculoCriado(vehicle.model, vehicle.registration);
        });
    });

    context('Remover um veículo', () => {
        beforeEach(() => {
            vehiclePage.criarVeiculo(vehicle.model, vehicle.registration, vehicle.country);
        });

        it('Veículo é removido com sucesso', () => {
            vehiclePage.obterDadosPrimeiroVeiculo().then(({ nome, matricula }) => {
                vehiclePage.deletarVeiculo();
                vehiclePage.validarVeiculoNaoVisivel(nome, matricula);
            });
        });
    });
});