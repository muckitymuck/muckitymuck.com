pipeline {
  agent {
    node {
      label 'web-server'
    }

  }
  stages {
    stage('pwd') {
      steps {
        sh 'pwd'
      }
    }

    stage('ls') {
      steps {
        sh 'ls'
      }
    }

  }
}