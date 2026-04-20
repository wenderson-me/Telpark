# Automação Telpark (Cypress)

 Testes automatizados para o portal Telpark, focando nas funcionalidades de Login e Veículos.

## Instalação

1. Clone o repositório.
2. Instale as dependências:

  ```bash
   npm install
  ```

## Configuração

Crie um arquivo chamado `cypress.env.json` na raiz do projeto e adicione suas credenciais:

```json
{
  "testEmail": "seu@email.com",
  "testPassword": "sua-senha"
}
```

## Como rodar os testes

**Para abrir a interface do Cypress:**
```bash
npx cypress open
```

**Para rodar via terminal (headless):**
```bash
npx cypress run
```

## O que foi testado?

### Login
- Login com sucesso.
- Login com erro (credenciais inválidas).
- Login com campos vazios.

### Veículos
- Cadastro de veículo com sucesso (país "Other").
- Remoção de veículo da lista.

## 💡 Observações
- Os testes usam o padrão **Page Object Model**.
- Dados de teste (modelos e matrículas) são gerados automaticamente usando a biblioteca **Faker**.
