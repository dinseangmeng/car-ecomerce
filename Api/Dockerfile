FROM node:14-alpine

WORKDIR /app

COPY . .
RUN npm install
# RUN npx prisma init
# RUN npx prisma generate
# RUN npx prisma migrate reset
# COPY . .


EXPOSE 3000

CMD ["npm", "run", "start:dev"]
