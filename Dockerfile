# syntax=docker/dockerfile:1
FROM node:14.17.3
ENV NODE_ENV=production
WORKDIR /app
# COPY ["<src>", "<dest>"]
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
COPY . .
CMD [ "node", "server.js" ]
