.PHONY: install build watch run

PORT := 9000
NODE_VERSION := 4.5.0
MAIL_PASSWORD := "MYPASS"
STRIPE_SECRET_KEY := "MYPASS"

install: ## Install application
	@ yarn --ignore-engines

build: ## Build with webpack
	@ mkdir -p public && cp src/robots.txt src/favicon.ico src/sitemap.xml src/sitemap.html public/
	@ NODE_ENV=production ./node_modules/.bin/babel --minified --compact true -d public/ src/js --only server.js
	@ NODE_ENV=production ./node_modules/.bin/webpack -p --progress --colors

watch: ## Watch
	@ ./node_modules/.bin/webpack --watch -d

run: ## Run application
	@ NODE_ENV=production node public/server.js

dev: ## Run dev environment
	@ NODE_ENV=development ./node_modules/.bin/babel-node src/js/server.js & make watch & make browser-sync

browser-sync:
	@ ./node_modules/.bin/browser-sync start --proxy "http://0.0.0.0:${PORT}" --files "public/*"

lint:
	@ ./node_modules/.bin/eslint src/

lint-fix:
	@ ./node_modules/.bin/eslint --fix src/

deploy: ## Run production application
	@ docker run -it -d --name larbreapages.fr \
	-e VIRTUAL_HOST='larbreapages.fr,www.larbreapages.fr' \
	-e LETSENCRYPT_HOST='larbreapages.fr,www.larbreapages.fr' \
	-e LETSENCRYPT_EMAIL=contact@larbreapages.fr \
	-e PORT=${PORT} \
	-e NODE_ENV=production \
	-e MAIL_PASSWORD=${MAIL_PASSWORD} \
	-e STRIPE_SECRET_KEY=${STRIPE_SECRET_KEY} \
	-v ${PWD}:/usr/src/app \
	-w /usr/src/app \
	-p ${PORT}:${PORT} node:${NODE_VERSION} \
	./node_modules/.bin/pm2 --no-daemon start public/server.js --watch
