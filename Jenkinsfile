pipeline {
    agent any
    stages {
        stage('Hello') {
            steps {
                script {
                    env.TEST = "Silicon Labs"
                    echo env.TEST
                    echo 'Hello World'
                }
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
                    to: "vanlamnguyen2110@gmail.com")
            }
        }
    }
}
