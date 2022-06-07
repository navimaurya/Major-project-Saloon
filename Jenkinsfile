pipeline{
    agent any
    stages{
        stage('Stoping-backend-server'){
            steps{
                 script {
                    try {
                        sh 'pm2 stop app'
                    } catch (err) {
                        echo err.getMessage()
                    }
                }
            }
        }
        stage('Get-Code'){
            steps{
                git branch: 'main', url: 'https://github.com/navimaurya/Major-project-Saloon.git'
                                
            }
        }
        stage('Starting-backend-server'){  
            steps{
                dir("backend-obpms-main") {
                    sh "ls"
                    sh 'sudo cp /home/ubuntu/env/server.env .env'
                    script {
                        try {
                            sh 'npm install'
                            sh 'pm2 start app.js'
                        } catch (err) {
                            echo err.getMessage()
                        }
                    }
                } 
            }
        }
        stage('Build-Website'){
            steps {
                dir("client.obpms-main") {
                    sh 'sudo cp /home/ubuntu/env/client.env .env'
                    sh 'yarn && CI=false yarn run build'
                    sh 'sudo cp -rf build/* /var/www/navimaurya.in'
                }

            }
        }
        stage('Build-Admin-dashboard'){
            steps{
            dir("parlour-obpms-main") {
                sh 'sudo cp /home/ubuntu/env/admin.env .env'
                sh 'yarn && CI=false yarn run build'
                sh 'sudo cp -rf build/* /var/www/admin.navimaurya.in'
            }

            }
        }

    }
}