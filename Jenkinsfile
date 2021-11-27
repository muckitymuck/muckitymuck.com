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

    stage('cp') {
      steps {
        sh 'sudo cp -r /home/ubuntu/workspace/muckitymuck.com_main/. /var/www/muckitymuck.com/'
      }
    }

    stage('restart nginx') {
      steps {
        sh 'sudo systemctl restart nginx'
      }
    }

  }
}