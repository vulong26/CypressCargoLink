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
        stage('Send Email') {
            env.ForEmailPlugin= env.WORKSPACE
                emailext mimeType: 'text/html',
                body: '${FILE, path="myfile.html"}',
                subject: currentBuild.currentResult + " : " + env.JOB_NAME,
                to: 'example@example.com'
            }
        }
    }
    post
    {
        always{
            mail bcc: '', body: 'I send you lastest test report  build!', cc: 'vulong265@gmail.com', from: '', replyTo: '', subject: 'Test report ', to: 'vuhoanglong0602@gmail.com'
            //     emailext( 
            //         mimeType: 'text/html',
            //         subject: env.TEST + " is available for running pipeline",
            //         body: "${env.TEST} sample email",
            //         to: "vuhoanglong0602@gmail.com")
            // }
            // env.ForEmailPlugin = env.WORKSPACE
            emailext (
                    attachLog: true, attachmentsPattern: "**/reports/html/index.html",
                    mimeType: 'text/html',
                    body: '${FILE, path="**/reports/html/index.html"}',                         
                    subject: 'Pipiline result report', to: 'vulong265@gmail.com')
        }
    }
}
