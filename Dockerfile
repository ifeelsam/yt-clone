FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install 
RUN npm install -g typescript

COPY . .

RUN tsc

EXPOSE 3001

CMD ["npm", "run", "dev"]