FROM node:14.15.1

RUN mkdir -p /usr/src/app

# Create app directory
WORKDIR /usr/src/app

#Install app dependencies
COPY package.json /usr/src/app

# Install dependencies
RUN npm install

EXPOSE 8000
CMD ["node", "src/index.js"]