## Single-stage build + static server (no nginx)
FROM node:25-alpine-3.23

WORKDIR /app

# Install deps separately to leverage Docker layer cache
COPY package*.json bun.lock* ./
RUN npm install

# Copy source and build
COPY . .
RUN npm run build

# Lightweight static server for SPA
RUN npm install -g serve

ENV PORT=6060
EXPOSE 6060

HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://localhost:6060/ || exit 1

CMD ["serve", "-s", "dist", "-l", "6060"]
