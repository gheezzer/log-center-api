[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

# Central de Logs

## Projeto final 

### Considerações

Este é o Projeto Final do programa de aceleração de carreiras AceleraDev 2020 promovido pela CodeNation com foco na tecnologia Node.js e apoiado pela empresa Cogna Educacão.

### Equipe

- Guilherme Cesar
- Henrique Detoni
- Juiliano Freire Ribeiro
- Luane Caroline Aquino Cavalcanti

### Objetivo

Em projetos modernos é cada vez mais comum o uso de arquiteturas baseadas em serviços ou microsserviços. Nestes ambientes complexos, erros podem surgir em diferentes camadas da aplicação (backend, frontend, mobile, desktop) e mesmo em serviços distintos. Desta forma, é muito importante que os desenvolvedores possam centralizar todos os registros de erros em um local, de onde podem monitorar e tomar decisões mais acertadas. Neste projeto implementamos um sistema para centralizar registros de erros de aplicações.

## Ambiente de desenvolvimento

### Download

```
Clone with HTTPS 
https://github.com/gheezzer/log-center-api.git

Clone with SSH
git@github.com:gheezzer/log-center-api.git

```

### Instalação de dependencias

```
npm i
```

### Configure a variável de ambiente no linux

Essa variável irá permitir que a biblioteca dotenv encontre o arquivo .env presente na raiz do projeto. Esse arquivo contém as variáveis de ambiente necessárias para rodar todo o projeto em ambiente de desenvolvimento.

```
export NODE_ENV=development
```

### Inicia o docker local

```
npm run docker
```

### Rodar aplicação local

```
npm start
```

### Visualizar a documentação da API

Com o servidor local rodando basta acessar:

[API DOCS - Swagger](http://localhost:8080/api-docs)

### Tecnologias utilizadas

- Node.js: v12.13.1

- Docker-compose: v1.17.1,

- MySQL (MariaDB): 1:10.4.12

### Dependências

-  bcryptjs: 2.4.3
-  body-parser: 1.19.0
-  express: 4.17.1
-  jsonwebtoken: 8.5.1
-  mariadb: 2.2.0
-  sequelize: 5.21.5
-  swagger-ui-express: 4.1.4
-  yup: 0.28.3

### Dependências de desenvolvimento

- dotenv: 8.2.0
- jest: 25.1.0
- nodemon: 2.0.2
- standard: 14.3.3
- supertest: 4.0.2
