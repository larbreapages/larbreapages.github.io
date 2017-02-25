.PHONY: install build watch run

install: ## Install application
	@ yarn --ignore-engines

build: ## Build with webpack
	@ mkdir -p public && cp src/{robots.txt,favicon.ico,sitemap.xml,sitemap.html} public/
	@ NODE_ENV=production ./node_modules/.bin/babel --minified --compact true -d public/ src/js --only server.js
	@ NODE_ENV=production ./node_modules/.bin/webpack -p --progress --colors

watch: ## Watch
	@ ./node_modules/.bin/webpack --watch -d

run: ## Run application
	@ NODE_ENV=production node public/server.js

dev: ## Run dev environment
	@ NODE_ENV=development ./node_modules/.bin/babel-node src/js/server.js & make watch

lint:
	@ ./node_modules/.bin/eslint src/

lint-fix:
	@ ./node_modules/.bin/eslint --fix src/
