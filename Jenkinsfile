pipeline {
  agent {
    node {
      label 'web-server'
    }

  }
  stages {
    stage('error') {
      steps {
        sh 'cd /home/ubuntu/muckitymuck.com'
      }
    }

    stage('git pull') {
      steps {
        sh 'git pull'
      }
    }

  }
}