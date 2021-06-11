from node:15.10.0

WORKDIR /tests

COPY package.json ./

RUN npm install -g npm@7.8.0
RUN npm install
RUN npm install cypress
