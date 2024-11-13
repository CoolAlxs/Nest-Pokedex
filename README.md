<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Ejecutar en Desarrollo
1. Clonar el repositorio
2. Ejecutar
```
pnpm install
```
3. Tener Nest CLI
```
pnpm i -g @nestjs/cli
```
4. Levantar la base de datos
```
docker-compose up -d
```
5. Clonar el archivo ```.env.template``` y renombrarlo a ```.env```
6. Llenar las variables de entorno en el archivo ```.env```
7.Ejecutar la Aplicación en dev:
```
pnpm run start:dev
```
8. Reconstruir la base de datos con la seed
```
http://localhost:3000/api/v2/seed
```

## Stack Usado
- NestJS
- MongoDB
- TypeScript
- Docker

