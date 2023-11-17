# Dockerfile for Next.js app

# Usa una imagen base con Node.js
FROM node:latest

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app


# Copia los archivos del proyecto al contenedor
COPY . .

# Instala las dependencias usando Yarn
RUN yarn install

# Expone el puerto 3000
EXPOSE 3000

# Comando para iniciar la aplicación Next.js con Yarn
CMD ["yarn", "dev"]