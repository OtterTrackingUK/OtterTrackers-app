# Use the official Node 22 LTS image
FROM node:22-slim

# Create app directory
WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

# Install production dependencies
RUN npm install --production

# Copy the rest of the app
COPY . .

# Expose the port App Service / Container Apps will use
EXPOSE 8080

# Start the server
CMD ["npm", "start"]
