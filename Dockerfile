# Build stage
FROM node:24.1-alpine3.20 AS builder

WORKDIR /app

RUN npm install -g pnpm

# Install dependencies
COPY package*.json ./
RUN npm ci
# Copy source files and build the app
COPY . .
RUN npm run build:prod

# Prune dev dependencies
RUN npm prune --omit=dev

# Runtime stage
FROM node:24.1-alpine3.20

WORKDIR /app

# Copy necessary files from the builder stage
COPY ./mongodb.pem ./mongodb.pem
COPY ./mongodb.crt ./mongodb.crt
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Expose the application's port
EXPOSE 3000

# Start the application
CMD ["node", "build"]