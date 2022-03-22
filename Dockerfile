FROM node:16-alpine AS appbuild

ENV NODE_ENV=production

RUN mkdir /app && chown node:node /app
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --include=dev

COPY . .

RUN npm run build

# ---- Release ----

FROM nginx:stable-alpine
COPY --from=appbuild /app/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
