FROM node:20

WORKDIR /app

# Enable Corepack so that Yarn can be used
RUN corepack enable

# Force Yarn to use node_modules instead of Plug'n'Play
ENV YARN_NODE_LINKER=node-modules

# Copy dependency files and install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy the rest of your code
COPY . .

# Run migrations and build admin assets
RUN yarn medusa db:migrate
RUN yarn medusa build

# Start the Medusa server in production mode
CMD ["yarn", "medusa", "start"]