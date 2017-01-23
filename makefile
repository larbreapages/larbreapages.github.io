PORT := 9000

install: ## Install application
	@ npm i

run: build ## Run application
	@ docker run -it --rm --name larbreapages.fr \
	-e VIRTUAL_HOST='larbreapages.fr,www.larbreapages.fr' \
	-e LETSENCRYPT_HOST='larbreapages.fr,www.larbreapages.fr' \
	-e LETSENCRYPT_EMAIL=contact@larbreapages.fr \
	-e PORT=${PORT} \
	-p ${PORT}:${PORT} node:4 \
	-v ${PWD}:/usr/src/app \
	-w /usr/src/app \
	./node_modules/.bin/babel-node src/js/server.js

watch: ## Watch
	@ ./node_modules/.bin/webpack --watch -d

build: ## Build with webpack
	@ rm -rf public
	@ mkdir -p public
	@ ./node_modules/.bin/webpack -p --progress --colors
	@ cp src/robots.txt public/
	@ cp src/favicon.ico public/
	@ cp src/sitemap.xml public/
	@ cp src/sitemap.html public/
