FROM node:latest

WORKDIR /home/node/app

COPY ./package.json ./package.json
COPY ./tsconfig.json ./tsconfig.json

RUN npm install

COPY ./src ./src

RUN npx tsc

CMD ["npm", "run", "start:prod"]