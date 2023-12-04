FROM node:20.10.0-alpine AS development
LABEL author="Khelemelia O."
LABEL email="oleksiikhel@gmail.com"
ENV NODE_ENV development
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY yarn.lock .
COPY README.md .
COPY tsconfig.json .
COPY .gitignore .
COPY LICENSE .
RUN yarn install
# Copy app files
COPY . .
# Expose port
EXPOSE 3000
# Start the app
CMD [ "yarn", "start" ]
