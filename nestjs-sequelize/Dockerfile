FROM node:19.8.1-alpine3.16 As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build && npm prune --production

FROM node:19.8.1-alpine3.16 As production

WORKDIR /usr/src/app

COPY --from=development /usr/src/app/dist ./dist
COPY --from=development /usr/src/app/node_modules/ ./node_modules/

ENV DATABASE_HOST=''
ENV DATABASE_PORT=''
ENV DATABASE_USERNAME=''
ENV DATABASE_PASSWORD=''
ENV DATABASE_NAME=''
ENV ENABLE_CORS=''

CMD ["node", "dist/main"]