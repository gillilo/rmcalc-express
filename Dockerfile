FROM node:20
WORKDIR /app
COPY . .
EXPOSE 80
CMD ["npm", "start"]

# docker network create rmcalc
# docker run -d -p 80:80 --name rmcalc-express --network rmcalc gillilo/rmcalc-express:latest 