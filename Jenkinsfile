#!groovy​
pipeline {
     
    agent any

    stages {
        stage('Test') {
            steps {
                checkout scm
                sh 'npm install'
                sh 'npm test'
            }
            post {
                always {
                    junit 'results/*.xml'
                }
            }
        }
    }
}