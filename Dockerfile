FROM node:8.11

RUN npm i -g @vue/cli
RUN mkdir /app && chmod 777 /app
WORKDIR /app
EXPOSE 8080