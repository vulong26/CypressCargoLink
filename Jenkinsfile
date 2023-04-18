pipeline {
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

        stage('Update submodules components') {
            steps {
             withCredentials([gitUsernamePassword(credentialsId: 'github-usr-pwd', gitToolName: 'Default')]){       
                sh '''
                        git submodule sync 
                        git config --file=.gitmodules submodule.pipeline_test.url https://github.com/alternativevn/pipeline_test.git
                        git submodule update --init --recursive --remote
                        git pull
                    '''
                    }
                }
            }

        stage('Run test') {
            steps {
                dir('pipeline_test') {
                    withCredentials([gitUsernamePassword(credentialsId: 'github-usr-pwd', gitToolName: 'Default')]){
                        sh '''
                        git checkout dev
                        cat sample.txt
                        '''
                    }
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
                    to: "vuhoanglong0602@gmail.com")
            }
        }
    }
}
