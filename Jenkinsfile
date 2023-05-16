pipeline {
    triggers {
        cron('H 0 * * 0')
    } 
    agent any 
    stages {
        stage('Starting') {
            steps 
            {
                script 
                {
                    env.TEST = "Cargolink Labs"
                    echo env.TEST
                    echo 'Ready to test!'
                    echo 'Cypress Run Test'
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
                bat "npm run test:data"
            //   powershell 'Compress-Archive -Force "./cypress/reports/html" reports.zip'
            }
        }
    }
    post
    {
        success{
            emailext (
                    attachLog: true,
                    attachmentsPattern: '**/reports/html/index.html',
                    mimeType: 'text/html',
                    body: '<div>Pipiline pass without error!<div>!!',                         
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
