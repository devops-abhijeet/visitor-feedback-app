FROM node:23.11.1-alpine

WORKDIR /app

COPY package.json .

RUN npm install 

RUN npm install mysql2 sql

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
