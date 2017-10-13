#!groovy​
pipeline {
     
    agent any

    stages {
        stage('Test') {
            steps {
                sh 'npm install'
                sh 'npm test'
            }
            post {
                always {
                    junit 'results/*.xml'
                    allure includeProperties: false, 
                    jdk: '', 
                    properties: [[key: 'variant', value: '${VARIANT}']], 
                    results: [[path: './results/allure/']]
                }
            }
        }
    }
}