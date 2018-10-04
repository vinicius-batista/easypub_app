FROM node:latest

RUN yarn global add @vue/cli
WORKDIR /app
EXPOSE 8080