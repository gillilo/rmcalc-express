FROM node:20
WORKDIR /app
COPY . .
RUN npm i
EXPOSE 80
CMD ["npm", "start"]

# docker network create rmcalc
# docker build -t gillilo/rmcalc-express:latest .
# docker push gillilo/rmcalc-express:latest
# docker run -d -p 81:80 --name rmcalc-express --network rmcalc gillilo/rmcalc-express:latest 