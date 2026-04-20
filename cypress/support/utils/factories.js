import { faker } from '@faker-js/faker'

  export const gerarCredenciaisInvalidas = (override = {}) => ({
      email: faker.internet.email(),
      password: faker.internet.password(),
      ...override
  });

  export const gerarVeiculo = (override = {}) => ({
    model: faker.vehicle.model(),
    registration: faker.vehicle.vrm(),
    country: 'Other',
    ...override
  });