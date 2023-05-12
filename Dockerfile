FROM node:latest


# Create app directory
RUN mkdir -p /app && chown -R node:node /app

RUN chmod -R 777 /app

WORKDIR /app
COPY out /app
COPY index.js /app
COPY package2.json /app/package.json

RUN ls

RUN npm i

# Expost port and start app
CMD node index.js
EXPOSE 3000

