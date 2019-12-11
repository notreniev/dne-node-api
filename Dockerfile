FROM node:12
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm rebuild node-sass
COPY . .

EXPOSE 3100

CMD ["node", "dist/index.js"]