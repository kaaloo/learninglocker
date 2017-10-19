# Base image
FROM node:alpine

# Install additional packages
RUN apk update && \
    apk upgrade && \
    apk add make g++ python

# Create app directory
RUN mkdir /app
WORKDIR /app

# Make sure unicode-json package installs ok
ENV NODE_UNICODETABLE_UNICODEDATA_TXT=/app/UnicodeData.txt
ADD UnicodeData.txt .

# Download npm modules for cloud
ADD package.json /tmp
ADD yarn.lock /tmp
RUN cd /tmp && yarn

# Move node_modules within app directory
RUN cp -a /tmp/node_modules .
RUN rm -rf /tmp/*

# Add pm2
RUN yarn global add pm2

# Add source files
ADD . .
RUN cp .env.example .env

# Build services
RUN yarn run build-all

# Run Locker
CMD pm2-docker pm2/all.json
