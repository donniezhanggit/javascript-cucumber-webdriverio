pipeline {
     
    agent any

    stages {
        stage('Test') {
            steps {
                sh 'npm install'
                sh 'npm test'
            }
        }
        stage('Report') {
            steps {
                sh 'npm run report'
            }
        }
    }
    post {
        always {
            junit 'results/*.xml'


            publishHTML([
                allowMissing: false, 
                alwaysLinkToLastBuild: false, 
                keepAll: false, 
                reportDir: './allure-report/', 
                reportFiles: 'index.html', 
                reportName: 'HTML Report', 
                reportTitles: ''
            ])

            allure includeProperties: false, 
            jdk: '', 
            properties: [[key: 'variant', value: '${VARIANT}']], 
            results: [[path: './results/allure/']]
        }
    }
}