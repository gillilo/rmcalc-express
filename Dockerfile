FROM node:20
WORKDIR /app
COPY . .
EXPOSE 81
CMD ["npm", "start"]

# docker run -d -p 81:81 --name rmcalc-express --network rmcalc gillilo/rmcalc-express:latest