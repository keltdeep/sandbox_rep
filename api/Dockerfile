FROM node:14.17.4-alpine3.14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install glob rimraf

RUN npm install --only=development

COPY . .

RUN npm run build

CMD ["npm", "start:dev"]
