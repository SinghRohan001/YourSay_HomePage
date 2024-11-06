ARG NODE_VERSION=21.7.1
FROM node:${NODE_VERSION}-alpine as base

WORKDIR /usr/src/app

RUN apk add --no-cache python3 make g++


FROM base as deps
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=cache,target=/root/.npm \
    npm i --omit=dev --force

FROM deps as build
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=cache,target=/root/.npm \
    npm i --force
COPY . .
RUN npm run build

FROM base as final
ENV NODE_ENV production

COPY package.json .
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
