pipeline {
    triggers {
        cron('H 0 * * 0')
    } 
    agent any 
    environment {
        DOCKERHUB_CREDENTIALS = credentials('vulong26-dockerhub')
    }
    def PRO_ROOT = 'C:\\Users\\Dell\\Desktop\\DATN\\CypressCargoLink\\docker-compose.yml'
    def CMD_TO_PUSH = 'up'
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
                bat "docker-compose -f $PRO_ROOT $CMD_TO_PUSH"
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
