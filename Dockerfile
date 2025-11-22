# Build stage
FROM node:24-alpine3.22 AS builder

# Install pnpm
RUN npm install -g pnpm

WORKDIR /app

# Copy package manifests and install dependencies with pnpm
COPY package.json package-lock.json* ./

RUN pnpm install 

COPY src ./src
COPY static ./static
COPY svelte.config.* ./
COPY vite.config.* ./
COPY messages ./messages
COPY project.inlang ./project.inlang

RUN pnpm build

FROM node:24-alpine3.22 AS runner

WORKDIR /app

RUN npm install -g pnpm

COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json .
COPY --from=builder /app/pnpm-lock.yaml .
RUN pnpm install --prod


EXPOSE 3000

CMD ["node", "build"]