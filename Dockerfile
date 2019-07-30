FROM node:7

RUN mkdir -p /app
COPY package.json /app

WORKDIR /app
RUN npm install
COPY . /app

CMD npm run start:dev
EXPOSE 5000
