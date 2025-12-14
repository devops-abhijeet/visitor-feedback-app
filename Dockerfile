FROM node:20-alpine

WORKDIR /app

# Copy BOTH files for reproducible builds
COPY package.json package-lock.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy application code
COPY . .

EXPOSE 3000

CMD ["npm", "start"]

