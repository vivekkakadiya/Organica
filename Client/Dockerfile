#Stage1: Build the react app using alpine version of node
FROM node:18-alpine as Builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build


#Stage 2: Use nginx to serve the static build 

FROM nginx:1.31.2-alpine

WORKDIR /app

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=Builder /app/build /usr/share/nginx/html

EXPOSE 80:80

ENTRYPOINT ["nginx-debug", "-g", "daemon off;"]


