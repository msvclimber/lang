FROM oven/bun:1
WORKDIR /app

COPY package*.json ./

ENV NODE_ENV=production
RUN bun install

COPY . .

RUN bun run build

USER bun
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "run", "index.ts" ]