pipeline {
    // triggers {
    //     cron('H 0 * * 0')
    // }
    agent any 
    stages {
        stage('Start') {
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
        stage('Tests') {
            steps {
                bat "npm run html-report"
            }
        }
    }
    post
    {
        success
        {
            script {
                env.ForEmailPlugin = env.WORKSPACE
                def emailAttachments = './reports/html/index.html'
                emailext( 
                    mimeType: 'text/html',
                    subject: env.TEST + " is available for running pipeline",
                    body: "${env.TEST} sample email",
                    to: "vuhoanglong0602@gmail.com",
                    attachmentsPattern: emailAttachments)
            }
        }
    }
}
