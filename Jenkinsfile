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
                bat 'docker build -t vulong26/dp-alpine:lastest .'
                bat "echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin"
                bat "docker push vulong26/dp-alpine:lastest"
            }
        }
    }

    post{
        always {
            bat "docker logout"
        }
        success{
            publishHTML(
                        [allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'cypress/reports/html',
                        reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
            emailext (
                    attachLog: true,
                    mimeType: 'text/html',
                    body: 'Success',                         
                    subject: 'Pipeline report', to: 'doanlong2023@gmail.com')
        }
        failure{
            emailext (
                    attachLog: true, attachmentsPattern: "**/reports/html/index.html",
                    mimeType: 'text/html',
                    body: '',                         
                    subject: 'Pipeline report', to: 'doanlong2023@gmail.com')
        }
    }
}
