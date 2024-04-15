# Use uma imagem base do Node.js
FROM node:20

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do npm
RUN npm install

# Copie o restante dos arquivos para o diretório de trabalho
COPY . .

# Copia o arquivo .env para dentro do contêiner
COPY .env ./.env

# Usa uma variável de ambiente do arquivo .env no Dockerfile
ENV NODE_ENV=${NODE_ENV}

# Expõe a porta 3000 para acessar a aplicação
EXPOSE 3000

# Comando para iniciar a aplicação
CMD [ "npm", "start" ]