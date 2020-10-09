FROM node:12.18.4

WORKDIR /react-tchat-socket

ENV PATH /react-tchat-socket/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN pnpm install --silent
RUN pnpm install react-scripts@3.4.1 -g --silent

COPY . ./

CMD [ "pnpm", "start" ]