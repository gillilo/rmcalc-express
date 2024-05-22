FROM node:20
WORKDIR /app
COPY . .
EXPOSE 81
CMD ["npm", "start"]