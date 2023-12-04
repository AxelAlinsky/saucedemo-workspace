# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Install any needed packages specified in package.json
RUN npm install

# Install Chrome for Selenium tests
RUN apt-get update && apt-get install -y \
    gnupg \
    wget \
    && wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb \
    && apt install ./google-chrome-stable_current_amd64.deb -y

# Make port available to the world outside this container
EXPOSE 8080

# Define environment variable
ENV NODE_ENV production

# Run npm test when the container launches
CMD ["npm", "test"]
