FROM node:20

WORKDIR /app

# Enable Corepack so that Yarn can be used
RUN corepack enable
ENV YARN_NODE_LINKER=node-modules

# Copy dependency files and install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy the rest of your code
COPY . .

# Expose the port (if needed)
EXPOSE 9000

# Start command will be managed by Railway (or use CMD to run a startup script)
CMD ["yarn", "medusa", "start"]