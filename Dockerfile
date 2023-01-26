FROM node:18-alpine3.16
RUN npm i -g pnpm
RUN mkdir app
WORKDIR /app

COPY . .

RUN pnpm install
EXPOSE 3000
CMD ["node", "-r", "dotenv/config","build/index.js"]
