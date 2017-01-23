PORT := 9000

install: ## Install application
	@ docker run -it --rm -v ${PWD}:/usr/src/app -w /usr/src/app node:4 npm i

build: ## Build with webpack
	@ rm -rf public
	@ mkdir -p public
	@ ./node_modules/.bin/webpack -p --progress --colors
	@ cp src/robots.txt public/
	@ cp src/favicon.ico public/
	@ cp src/sitemap.xml public/
	@ cp src/sitemap.html public/

watch: ## Watch
	@ ./node_modules/.bin/webpack --watch -d

run: build ## Run application
	@ docker run -it --rm --name larbreapages.fr \
	-e VIRTUAL_HOST='larbreapages.fr,www.larbreapages.fr' \
	-e LETSENCRYPT_HOST='larbreapages.fr,www.larbreapages.fr' \
	-e LETSENCRYPT_EMAIL=contact@larbreapages.fr \
	-e PORT=${PORT} \
	-v ${PWD}:/usr/src/app \
	-w /usr/src/app \
	-p ${PORT}:${PORT} node:4 \
	./node_modules/.bin/babel-node src/js/server.js

