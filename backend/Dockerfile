FROM node:16

WORKDIR /app

# Copy dependency files and install dependencies with engine check bypassed
COPY package.json yarn.lock ./
RUN yarn install --ignore-engines

# Copy the rest of your code
COPY . .

# Run migrations and build admin assets
RUN yarn medusa db:migrate
RUN yarn medusa build

# Start the Medusa server in production mode
CMD ["yarn", "medusa", "start"]