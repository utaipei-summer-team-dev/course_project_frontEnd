# FROM node:12.16.0-alpine as build-stage
# WORKDIR /app
# COPY package*.json ./
# RUN npm cache clean --force
# RUN npm install
# COPY ./ .
# EXPOSE 80
# CMD ["npm", "run", "serve"]

FROM node:12.16.0-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf