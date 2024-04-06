# Etapa de construcción (Build Stage)
FROM node:lts-alpine AS build

WORKDIR /app

# Copia los archivos del proyecto al contenedor
COPY . .

# Limpia la caché de npm
#RUN npm cache clean --force

# Instala las dependencias y construye la aplicación Next.js
RUN npm install --legacy-peer-deps
RUN npm run build

# Etapa de producción (Production Stage)
FROM node:lts-alpine AS production

WORKDIR /app

# Copia solo los archivos necesarios para la aplicación compilada
COPY --from=build /app/package.json /app/package-lock.json ./
COPY --from=build /app/.next ./.next

# Instala solo las dependencias de producción
# RUN npm install --only=prod --legacy-peer-deps
RUN npm install --only=production --legacy-peer-deps
# ENV NODE_ENV=development
# ENV CHOKIDAR_USEPOLLING=true
# ENV 

# Expone el puerto 3000 (puedes eliminar esta línea si no es necesario)
EXPOSE 3000

# Comando para iniciar la aplicación Next.js en modo producción
# CMD ["npm", "run", "dev"]
CMD ["npm", "start"]

