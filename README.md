# Projeto de Desafio Back-end - Catálogo de Filmes

Este é um projeto desenvolvido como parte de um desafio de back-end para criar um catálogo de filmes com autenticação JWT, utilizando Nest.js, PostgreSQL, TypeORM, Redis e Swagger.

## Requisitos do Desafio

- Desenvolver um sistema de autenticação JWT.
- Construir uma CRUD de um catálogo de filmes.
- Todos os endpoints da CRUD só devem ser acessíveis por um usuário autenticado.

## Ferramentas Utilizadas

- **TypeScript**: Linguagem de programação.
- **Nest.js**: Framework para construção de aplicativos Node.js escaláveis.
- **TypeORM**: ORM (Object-Relational Mapping) para interagir com o banco de dados PostgreSQL.
- **Redis**: Banco de dados em memória para cache.
- **Swagger**: Ferramenta para documentar APIs.
- **Docker**: Plataforma para desenvolvimento, envio e execução de aplicativos em contêineres.

## Configuração do Ambiente

1. **Instalação de Dependências**:
   - Certifique-se de ter o Node.js e o npm instalados em seu sistema.
   - Execute `npm install` para instalar todas as dependências do projeto.

2. **Configuração do Banco de Dados**:
   - Configure as variáveis de ambiente no arquivo `.env` para se conectar ao banco de dados PostgreSQL.
   - Certifique-se de ter o PostgreSQL instalado e em execução em sua máquina ou em um contêiner Docker.

## Executando o Projeto

1. **Modo de Desenvolvimento**:
   - Execute `npm run start:dev` para iniciar o servidor em modo de desenvolvimento.
   - O servidor será iniciado em `http://localhost:3000`.

2. **Docker**:
   - Execute `docker-compose up` para iniciar os contêineres Docker.
   - O servidor será iniciado em `http://localhost:3000`.

## Documentação da API

- A documentação da API está disponível em `http://localhost:3000/api`.

## Autor

Este projeto foi desenvolvido por Vítor Delgado como parte do desafio de back-end.