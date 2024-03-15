# Use an official Node runtime as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Install Chrome to run tests in a headless browser. Adjust these commands if you're using a different browser.
RUN apt-get update && apt-get install -y wget gnupg \
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list' \
    && apt-get update \
    && apt-get install -y google-chrome-stable

# Optionally, install ChromeDriver if required by your tests.
# Make sure to match ChromeDriver version with the installed Chrome version.
# This is a basic example; you might need to adjust versions and paths.
RUN wget -N http://chromedriver.storage.googleapis.com/2.41/chromedriver_linux64.zip -P ~/ \
    && unzip ~/chromedriver_linux64.zip -d ~/ \
    && rm ~/chromedriver_linux64.zip \
    && mv -f ~/chromedriver /usr/local/share/ \
    && chmod +x /usr/local/share/chromedriver \
    && ln -s /usr/local/share/chromedriver /usr/local/bin/chromedriver \
    && ln -s /usr/local/share/chromedriver /usr/bin/chromedriver

# Copy the package.json (and possibly package-lock.json or pnpm-lock.yaml) into the container
COPY package.json pnpm-lock.yaml ./

# Install pnpm globally
RUN npm install -g pnpm

# Install project dependencies
RUN pnpm install

# Copy your project's source code into the container
COPY . .

# Build the project - this compiles your TypeScript files
RUN pnpm run build

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Define environment variable for headless testing and other environment configurations
ENV NODE_ENV=production \
    CHROME_BIN=/usr/bin/google-chrome \
    HEADLESS=true

# Command to run when the container starts. This runs your regression tests.
CMD ["pnpm", "run", "regression"]
