pipeline {
    triggers {
        cron('H 0 * * 0')
    } 
    agent any 
    environment {
        DOCKERHUB_CREDENTIALS = credentials('vulong26-dockerhub')
    }
    stages {
        // stage('Install Dependencies') {
        //     steps {
        //         bat "npm i"
        //     }
        // }
        // stage('Run Tests') {
        //     steps {
        //         bat "npx cypress install"
        //         bat "npm run html-report"
        //     }
        // }
        stage('Push to Docker') {
            steps {
                    dockerImage = docker.build("monishavasu/my-react-app:latest")
         }
        }
        stage{
                    withDockerRegistry([ credentialsId: "vulong26-dockerhub", url: "" ]) {
        dockerImage.push()
        }
        }
    }
    post{   
        always{
            bat "docker logout"
        }
        success{
            publishHTML(
                        [allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'cypress/reports/html',
                        reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
            emailext (
                    attachLog: true,
                    mimeType: 'text/html',
                    body: 'Success build! Ready push to environments',                         
                    subject: 'Pipeline Success Report', to: 'doanlong2023@gmail.com')
        }
        failure{
            emailext (
                    attachLog: true, attachmentsPattern: "**/reports/html/index.html",
                    mimeType: 'text/html',
                    body: 'Pipeline fail! Please check recently commit',                         
                    subject: 'Pipeline Failure Report', to: 'doanlong2023@gmail.com')
        }
    }
}
