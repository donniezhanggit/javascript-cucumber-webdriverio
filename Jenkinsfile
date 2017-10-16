pipeline {
     
    agent any

    stages {
        stage('Test') {
            steps {
                sh 'npm install'
                sh 'npm test'
            }
        }
    }
    post {
        always {

            sh 'npm run report'

            publishHTML([
                allowMissing: false, 
                alwaysLinkToLastBuild: false, 
                keepAll: true, 
                reportDir: './allure-report/', 
                reportFiles: 'index.html', 
                reportName: 'HTML Report',
                 reportTitles: ''
            ])
        }
    }

}
