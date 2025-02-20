#!/bin/sh
set -e
echo "Running migrations..."
yarn medusa db:migrate
echo "Building admin assets..."
yarn medusa build
echo "Starting Medusa server..."
yarn medusa start