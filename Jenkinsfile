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
                bat "npm run cy:run"
            }
        }
    }
    post
    {
        success
        {
            script {
                env.ForEmailPlugin = env.WORKSPACE
                emailext( 
                    mimeType: 'text/html',
                    subject: env.TEST + " is available for running pipeline",
                    body: "${env.TEST} sample email",
                    to: "vuhoanglong0602@gmail.com")
            }
        }
        always{
            mail bcc: '', body: 'I send you lastest test report  build!', cc: 'vulong265@gmail.com', from: '', replyTo: '', subject: 'Test report ', to: 'vuhoanglong0602@gmail.com'
            // publishHTML target: [
            //             allowMissing: false,
            //             alwaysLinkToLastBuild: true,
            //             keepAll: true,
            //             reportDir: '**/reports/html',
            //             reportFiles: 'index.html',
            //             reportName: 'Test Results'
            //         ]
            emailext body: "<html><head></head><body><p>I send you lastest test report build!</p></body></html>",
                     subject: "Test Report",
                     attachmentsPattern: "**/reports/html/*.html",
                     to: "vuhoanglong0602@gmail.com"
        }
    }
}
