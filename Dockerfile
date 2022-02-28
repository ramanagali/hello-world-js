FROM node:14.19.0
WORKDIR /app
COPY server.js package.json ./
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]