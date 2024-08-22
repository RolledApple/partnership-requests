FROM node:20.16.0
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . .
CMD npm run prisma-migrate && yarn start
