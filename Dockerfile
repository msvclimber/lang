FROM oven/bun:1 AS base
WORKDIR /app

COPY package.json.

RUN bun install

COPY . .

RUN bun run build

EXPOSE 8080

CMD [ "bun", "run", "serve" ]