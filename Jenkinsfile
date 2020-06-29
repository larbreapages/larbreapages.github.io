pipeline {
    agent any

    triggers{ pollSCM('H/15 * * * *') }

    environment { 
        IMAGE = 'registry.ethibox.fr/larbreapages.fr'
		DOCKER_SERVICE = 'larbreapages_web'
    }

    stages {
        stage('Build') {
            steps {
                sh 'docker build -t $IMAGE .'
            }
        }

        stage('Publish') {
            steps {
                sh 'docker push $IMAGE'
                sh 'docker service update --with-registry-auth --force $DOCKER_SERVICE --image $IMAGE'
            }
        }
    }
}
