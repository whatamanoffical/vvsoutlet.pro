#!/bin/sh
export PATH="./node_modules/.bin:$PATH"
set -e
echo "Running migrations..."
yarn medusa db:migrate
echo "Building admin assets and linking them..."
yarn medusa build && ln -s .medusa/server/public/ public
echo "Starting Medusa server..."
NODE_ENV=production yarn medusa start -H 0.0.0.0