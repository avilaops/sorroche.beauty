# O site é exportado como arquivos estáticos (next.config.ts: output "export").
# A imagem só transporta os arquivos: o deploy estático da infra copia
# /usr/share/nginx/html para /var/www/sorroche.beauty, servido pelo Caddy.
FROM node:22-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

FROM nginx:1.31-alpine
COPY --from=builder /app/out /usr/share/nginx/html
