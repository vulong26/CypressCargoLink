FROM node:16

RUN apt-get update && apt-get install -y jq libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb

WORKDIR /app
COPY . .

RUN npm install 
