FROM node:20

WORKDIR /app

# Enable Corepack so that Yarn can be used as specified in package.json
RUN corepack enable

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