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
                bat "./mvnw clean install site surefire-report:report"
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
                    body: '${FILE,path="cypress/reports/html/index.html"}',                         
                    subject: '$PROJECT_NAME - Build # $BUILD_NUMBER - $BUILD_STATUS!', to: 'doanlong2023@gmail.com')
        }
        failure{
            emailext (
                    attachLog: true, attachmentsPattern: "**/reports/html/index.html",
                    mimeType: 'text/html',
                    body: '$PROJECT_NAME - Build # $BUILD_NUMBER - $BUILD_STATUS:
                    Check console output at $BUILD_URL to view the results.',                         
                    subject: '$PROJECT_NAME - Build # $BUILD_NUMBER - $BUILD_STATUS!', to: 'doanlong2023@gmail.com')
        }
    }
}
