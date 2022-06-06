pipeline{
    stages{
        stage('Stoping backend server'){
            steps{
                sh 'pm2 stop app'
            }
        }
        stage('Get Code'){
            steps{
                git branch: 'main', url: 'https://github.com/navimaurya/Major-project-Saloon.git'
                                
            }
        }
        stage('Starting backend server'){   
            sh 'pm2 start "$PWD/backend-obpms-main/app.js"'
        }
        stage('Build Website'){
            sh 'echo "$PWD/client.obpms-main"'
            sh 'cd "$PWD/client.obpms-main"'
            sh 'yarn && yarn run build'
            sh 'sudo cp -rf build/* /var/www/navimaurya.in'
        }
        stage('Build Admin dashboard'){
            sh 'echo "$PWD/parlour-obpms-main"'
            sh 'cd "$PWD/parlour-obpms-main"'
            sh 'yarn && yarn run build'
            sh 'sudo cp -rf build/* /var/www/admin.navimaurya.in'
        }

    }
}