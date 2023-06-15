FROM node:14-slim
WORKDIR /index
COPY package.json .
RUN npm install --force
COPY . .
EXPOSE 5000
CMD ["npm", "start"]
