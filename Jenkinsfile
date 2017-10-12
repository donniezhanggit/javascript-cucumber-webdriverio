#!groovy​
node('master') {

  stage ('checkout') {
    checkout scm
  }

  stage ('test') {
    sh 'npm install'
    sh 'npm test'
  }
  
//   stage ('report') {
//     step([
//         $class: 'CucumberReportPublisher', 
//         buildStatus: 'UNSTABLE', 
//         failedFeaturesNumber: 0, 
//         failedScenariosNumber: 1, 
//         failedStepsNumber: 0, 
//         fileExcludePattern: '', 
//         fileIncludePattern: '*.json', 
//         jsonReportDirectory: 'results', 
//         pendingStepsNumber: 0, 
//         skippedStepsNumber: 0, 
//         trendsLimit: 20, 
//         undefinedStepsNumber: 0
//     ])
//   }
}