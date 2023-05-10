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
            // mail bcc: '', body: 'I send you lastest test report  build!', cc: 'vulong265@gmail.com', from: '', replyTo: '', subject: 'Test report ', to: 'vuhoanglong0602@gmail.com'
            //     emailext( 
            //         mimeType: 'text/html',
            //         subject: env.TEST + " is available for running pipeline",
            //         body: "${env.TEST} sample email",
            //         to: "vuhoanglong0602@gmail.com")
            // }
            emailext (attachLog: true, attachmentsPattern: '**/reports/html/index.html', body: '', subject: 'Pipiline result report', to: 'vulong265@gmail.com')
        }
    }
}
