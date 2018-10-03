FROM node:8.11

RUN yarn global add @vue/cli
RUN mkdir /app && chmod 777 /app
WORKDIR /app
EXPOSE 8080