pipeline {
  agent {
    node {
      label 'web-server'
    }

  }
  stages {
    stage('git') {
      steps {
        git(url: 'https://github.com/muckitymuck/muckitymuck.com.git', branch: 'main')
      }
    }

  }
}