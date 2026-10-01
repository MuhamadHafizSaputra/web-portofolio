FROM node:24-alpine

# Enable pnpm via corepack
RUN corepack enable && corepack prepare pnpm@10.18.2 --activate

WORKDIR /app

# Copy dependency specifications first for Docker layer caching
COPY package.json pnpm-lock.yaml ./

# Install dependencies inside the container
RUN pnpm install --frozen-lockfile

# Copy the rest of the source code
COPY . .

EXPOSE 4321

# Bind to 0.0.0.0 so the dev server can be reached from your browser
CMD ["pnpm", "astro", "dev", "--host", "0.0.0.0"]
