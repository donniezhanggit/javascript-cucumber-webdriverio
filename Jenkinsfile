#!groovy​
// node('master') {

//   stage ('checkout') {
//     checkout scm
//   }

//   stage ('test') {
//     sh 'npm install'
//     sh 'npm test'
//   }
  
//   stage ('report') {
//     cucumber 'results/*.json'
//     // step([
//     //     $class: 'CucumberReportPublisher', 
//     //     buildStatus: 'UNSTABLE', 
//     //     failedFeaturesNumber: 0, 
//     //     failedScenariosNumber: 1, 
//     //     failedStepsNumber: 0, 
//     //     fileExcludePattern: '', 
//     //     fileIncludePattern: '*.json', 
//     //     jsonReportDirectory: 'results', 
//     //     pendingStepsNumber: 0, 
//     //     skippedStepsNumber: 0, 
//     //     trendsLimit: 20, 
//     //     undefinedStepsNumber: 0
//     // ])
//   }
// }


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
                    //generate cucumber reports
                    cucumber 'results/*.json'
                }
            }
        }
    }
}