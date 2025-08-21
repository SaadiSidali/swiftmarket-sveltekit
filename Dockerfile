# Build stage
FROM node:24.1-alpine3.20 AS builder

# Install pnpm
RUN npm install -g pnpm

WORKDIR /app

# Copy package manifests and install dependencies with pnpm
COPY package.json package-lock.json* pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy source and build
COPY . .
RUN pnpm run build

# Stage 2: Production image
FROM node:24.1-alpine3.20 AS prod

WORKDIR /app

# Install only production dependencies
COPY package.json package-lock.json* pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --omit=dev

# Copy built app
COPY --from=builder /app/build ./build

# If you're using .env files and Node >=20.6, uncomment:
# COPY .env .env

# Expose port (customize if not 3000)
EXPOSE 3000

# Set environment variables or rely on Docker/Kubernetes configuration
# Example:
# ENV HOST=0.0.0.0
# ENV PORT=3000
# ENV ORIGIN=https://your.domain

# Launch
CMD ["node", "build"]
