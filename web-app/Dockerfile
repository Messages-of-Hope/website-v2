FROM node:20-alpine

# Set working directory
WORKDIR ./usr/web-app
# Copy package.json to working directory
COPY package.json ./
RUN npm install

# Copy directory to working directory
COPY ./ ./
# Run app
RUN chmod +x ./startup.sh
CMD sh ./startup.sh
