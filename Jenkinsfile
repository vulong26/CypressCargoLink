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
                bat "npm run html-report"
            }
        }
    }

    post{
        success{
            publishHTML([
                        allowMissing: false,
                        alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'target/site', 
                        reportFiles: 'html-report.html', reportName: 'HTML Report',
                        reportTitles: '', useWrapperFileDirectly: true])
            emailext (
                    attachLog: true,
                    attachmentsPattern: '**/reports/html/index.html',
                    mimeType: 'text/html',
                    body: '${FILE, path="./cypress/reports/html/index.html"}',                         
                    subject: 'Pipiline always report', to: 'vulong265@gmail.com')
        }
        failure{
            emailext (
                    attachLog: true, attachmentsPattern: "**/reports/html/index.html",
                    mimeType: 'text/html',
                    body: 'Pipeline run fail. Please check code soon!',                         
                    subject: 'Pipiline fail by recently commit!', to: 'vulong265@gmail.com')
        }
    }
}
