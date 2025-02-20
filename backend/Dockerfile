FROM node:20
WORKDIR /app
RUN corepack enable
ENV YARN_NODE_LINKER=node-modules
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
EXPOSE 9000
CMD ["sh", "./start.sh"]