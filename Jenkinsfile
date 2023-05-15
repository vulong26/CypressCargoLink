pipeline {
    triggers {
        cron('H 0 * * 0')
    }
    ansiColor('xterm') {
    // some block
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
            }
        }
    }
    post
    {
        success{
            sh "tar -zcvf ./reports/html.tar.gz html"
            emailext (
                    attachLog: true, attachmentsPattern: "**/reports/html/index.html",
                    mimeType: 'text/html',
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
