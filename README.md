# Projeto Agilizei Bootcamp - Proffy

[![proffy](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/detailed/1htiwm/main&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/1htiwm/runs)

## Ambiente

- [Node.js](https://www.oracle.com/br/java/technologies/javase/javase-jdk8-downloads.html "Node.js")
  - (Versão utilizada: 14.15.3)

## Configuração

Clone o repositório:

```
git clone https://github.com/delonborges/agilizei-bootcamp-proffy-project
```

Acesse a pasta do projeto:

```
cd agilizei-bootcamp-proffy-project
```

Acesse a pasta web:

```
cd web
```

Efetue a instalação das dependências:

```
npm install
```

## Execução

Inicie a execução da API e do projeto web:

```
npm run start:ci
```

Inicie o Cypress:

```
npx cypress open
```

Executar os testes:

```
npm run cy:run
```

Executar os testes em modo "Desktop":

```
npm run cy:run:desktop
```

Executar os testes em modo "Tablet":

```
npm run cy:run:tablet
```

Executar testes de UI:

```
npm run test:ui
```

Executar testes de API:

```
npm run test:api
```

Executar testes de componentes:

```
npm run test:component
```

## Cypress Dashboard

- [Proffy](https://dashboard.cypress.io/projects/1htiwm/ "Proffy")

Executar os testes, gravando no dashboard:

```
npm run cy:run:dash
```
