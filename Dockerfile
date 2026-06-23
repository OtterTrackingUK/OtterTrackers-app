# Use a lightweight web server
FROM nginx:alpine

# Copy app files into Nginx's default web directory
COPY . /usr/share/nginx/html

# Expose port 80 for web traffic
EXPOSE 80

# No CMD needed — Nginx runs automatically
