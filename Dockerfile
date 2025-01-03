FROM oven/bun:1
WORKDIR /app

COPY package*.json ./

ENV NODE_ENV=production
RUN bun install

RUN adduser --system --uid 1001 bun

COPY . .

RUN bun run build && ls

USER bun
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "run", "serve" ]