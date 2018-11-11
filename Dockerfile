# Build

FROM node:10.12-alpine AS build

WORKDIR /app

COPY . /app

RUN npm install && npm rebuild node-sass

RUN npm run build

# Production

FROM node:10.12-alpine

COPY --from=build /app/build /app

RUN npm i -g serve

WORKDIR /app

ENV NODE_ENV=production

CMD ["serve"]

EXPOSE 5000
