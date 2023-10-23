FROM node:18.18-alpine3.18 As development
LABEL maintainer=DefinitelyHuman

# Create app directory
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure copying both package.json AND package-lock.json (when available).
# Copying this first prevents re-running npm install on every code change.
COPY --chown=node:node package*.json ./

# npm ci for running in automated invironments
RUN npm ci

RUN mkdir -p ./node_modules/.cache && chmod -R 777 ./node_modules/.cache && \
    mkdir -p ./node_modules/.vite && chmod -R 777 ./node_modules/.vite

# Bundle app source
COPY --chown=node:node . .

# Use the node user from the image (instead of the root user)
USER node