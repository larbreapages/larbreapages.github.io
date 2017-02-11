.PHONY: install build watch run

PORT := 9000
NODE_VERSION := 4.5.0
NODE_BIN := docker run -it --rm -v ${PWD}:/usr/src/app -w /usr/src/app node:${NODE_VERSION}

install: ## Install application
	@ $(NODE_BIN) npm i
	@ make build

build: ## Build with webpack
	@ rm -rf public
	@ mkdir -p public
	@ $(NODE_BIN) ./node_modules/.bin/webpack -p --progress --colors
	@ cp src/robots.txt public/
	@ cp src/favicon.ico public/
	@ cp src/sitemap.xml public/
	@ cp src/sitemap.html public/

watch: ## Watch
	@ $(NODE_BIN) ./node_modules/.bin/webpack --watch -d

run: build ## Run application
	@ docker run -it --rm --name larbreapages.fr \
	-e VIRTUAL_HOST='larbreapages.fr,www.larbreapages.fr' \
	-e LETSENCRYPT_HOST='larbreapages.fr,www.larbreapages.fr' \
	-e LETSENCRYPT_EMAIL=contact@larbreapages.fr \
	-e PORT=${PORT} \
	-v ${PWD}:/usr/src/app \
	-w /usr/src/app \
	-p ${PORT}:${PORT} node:${NODE_VERSION} \
	./node_modules/.bin/babel-node src/js/server.js

