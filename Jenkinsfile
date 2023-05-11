pipeline {
    triggers {
        cron('H 0 * * 0')
    }
    agent any 
    stages {
        stage('Hello') {
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
        always{
            //     emailext( 
            //         mimeType: 'text/html',
            //         subject: env.TEST + " is available for running pipeline",
            //         body: "${env.TEST} sample email",
            //         to: "vuhoanglong0602@gmail.com")
            // }
            // env.ForEmailPlugin = env.WORKSPACE
            emailext (
                    attachLog: true, attachmentsPattern: "**/reports/html",
                    mimeType: 'text/html',
                    body: '',                         
                    subject: 'Pipiline result report', to: 'vulong265@gmail.com')
        },
    }
}
