## Multi-stage build for Vite React SPA
FROM node:25-alpine AS build

WORKDIR /app

# Install deps separately to leverage Docker layer cache
COPY package*.json bun.lock* ./
RUN npm install

# Copy source and build
COPY . .
RUN npm run build

# Production image with nginx serving the static build
FROM nginx:1.27-alpine

WORKDIR /usr/share/nginx/html

# Replace default server config with SPA-friendly one
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist ./

EXPOSE 6060

HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://localhost:6060/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
