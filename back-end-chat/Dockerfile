FROM node:latest

WORKDIR /home/node/app

COPY ./package.json ./package.json
COPY ./tsconfig.json ./tsconfig.json
COPY ./.env ./.env

RUN npm install --no-option

COPY ./src ./src

RUN npx tsc

CMD ["npm", "run", "start:prod"]

# 컨테이너 실행 
# docker run -p 8000:8000 -d {image}