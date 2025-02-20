FROM node:16

WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy the rest of your code
COPY . .

# Run migrations (if needed) and build the admin assets
RUN yarn medusa db:migrate
RUN yarn medusa build

# Start the Medusa server in production mode
CMD ["yarn", "medusa", "start"]