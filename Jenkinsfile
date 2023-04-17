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
        // stage('Run test') {
        //     steps {
        //         script {
        //             sh '''
        //             npm install ...
        //             cypress run ...
        //             '''
        //         }
        //     }
        // }
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
    }
}
