FROM node:14-alpine
LABEL authors="Venkata Ramana Gali"

# Optimise for production
ENV NODE_ENV production

# Create app directory
WORKDIR /usr/src/app

# Copy app files
COPY --chown=node:node . /usr/src/app

# update each dependency in package.json to the latest version
RUN npm install -g npm-check-updates \
    ncu -u \
    npm install \
    npm install express \
    npm install babel-cli \
    npm install babel-preset \
    npm install babel-preset-env

# Install only production dependencies
RUN npm ci --only=production

# run as user 
USER node

# Make port 3000 accessible outside of the container
EXPOSE 3000
CMD ["npm", "run", "start"]