pipeline {
    triggers {
        cron('H 0 * * 0')
    }
    agent any 
    stages {
        stage('Starting') {
            steps {
                script {
                    env.TEST = "Silicon Labs"
                    echo env.TEST
                    echo 'Hello World'
                    echo 'Cypress Run test #1'
                }
            }
        }
        stage('Install Dependencies') {
            steps {
                bat "npm i"
            }
        }
        stage('Run Tests') {
            steps {
                bat "npx cypress install"
                bat "npm run html-report"
                powershell 'Compress-Archive -Force "./cypress/reports/html" reports.zip'
            }
        }
    }
    post
    {
        success{
            emailext (
                    attachLog: true, attachmentsPattern: 'reports.zip',
                    mimeType: '*',
                    body: 'Pipeline run success!!',                         
                    subject: 'Pipiline result report', to: 'vulong265@gmail.com')
        }
        failure{
            emailext (
                    attachLog: true, attachmentsPattern: "**/reports/html/index.html",
                    mimeType: 'text/html',
                    body: 'Pipeline run fail. Please check code soon!',                         
                    subject: 'Pipiline result report', to: 'vulong265@gmail.com')
        }
    }
}
