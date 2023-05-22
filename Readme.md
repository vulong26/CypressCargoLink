# open cypress
 npx cypress open
 # run all test
 npx cypress run
 # run jenkins
 java -jar jenkins.war --httpPort=8080
 # ngrok 
 ngrok config add-authtoken 2OYb0xhzINLE6VwJ18h0M23wWiq_5DuhCEryjdMWKZcDsCnt9
 ngrok http 8080

 & 'C:\Program Files\Docker\Docker\DockerCli.exe' -SwitchDaemon

FROM node:16

RUN apt-get update && apt-get install -y jq libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb

WORKDIR /app
COPY . .

RUN npm install 

FROM alpine:3.13.5s