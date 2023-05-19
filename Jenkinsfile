pipeline {
    triggers {
        cron('H 0 * * 0')
    } 
    agent any 
    environment {
        DOCKERHUB_CREDENTIALS = credentials('vulong26-dockerhub')
    }
    stages {
        stage('Install Dependencies') {
            steps {
                bat "npm i"
            }
        }
        stage('Run Tests') {
            steps {
                bat "npx cypress install"
                bat "npm run html-report"
            }
        }
        stage('Push to Docker') {
            steps {
                    bat 'docker build -t docker/dp-alpine:lastest .'
                    bat "echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR -p $DOCKERHUB_CREDENTIALS_PSW docker.io"
                    bat "docker push docker/dp-alpine:lastest"
         }
        }
    }
    post{   
        success{
            publishHTML(
                        [allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'cypress/reports/html',
                        reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
            emailext (
                    attachLog: true,
                    mimeType: 'text/html',
                    body: 'Success build! Ready push to environments',                         
                    subject: 'Pipeline Success Report', to: 'doanlong2023@gmail.com')
        }
        failure{
            emailext (
                    attachLog: true, attachmentsPattern: "**/reports/html/index.html",
                    mimeType: 'text/html',
                    body: 'Pipeline fail! Please check recently commit',                         
                    subject: 'Pipeline Failure Report', to: 'doanlong2023@gmail.com')
        }
    }
}
