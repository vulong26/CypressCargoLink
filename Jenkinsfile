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
        stage('Run Tests') {
            steps {
                bat "npm run html-report"
            }
        }
    }
    post
    {
        always{
            publishHTML([allowMissing: false, reportDir: 'cypress/reports/html', reportFiles: 'index.html'])
        }
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
    }
}
