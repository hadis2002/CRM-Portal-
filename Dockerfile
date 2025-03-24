FROM node:20 as build-stage
WORKDIR /app
COPY ./WebgostarPortal/package*.json ./
RUN npm install --legacy-peer-deps
COPY ./WebgostarPortal/ .
RUN npm run build 
FROM nginx:alpine
COPY ./WebgostarPortal/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html/main
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]