.PHONY: install build watch run

PORT := 5000

install: ## Install application
	@ yarn --ignore-engines

build: ## Build with webpack
	@ rm -rf public && mkdir -p public && cp src/robots.txt src/favicon.ico src/sitemap.xml src/sitemap.html public/
	@ NODE_ENV=production ./node_modules/.bin/babel --minified --compact true -d public/ src/js --only server.js
	@ NODE_ENV=production ./node_modules/.bin/webpack -p --progress --colors

watch: ## Watch
	@ ./node_modules/.bin/webpack --watch -d

run: ## Run application
	@ PORT=${PORT} NODE_ENV=production node public/server.js

dev: ## Run dev environment
	@ PORT=${PORT} NODE_ENV=development ./node_modules/.bin/pm2 start --watch src/ --no-daemon src/js/server.js --interpreter ./node_modules/.bin/babel-node & make watch

deploy: build ## Run production application
	@ tar --exclude='node_modules' --exclude='.git' --exclude='src' --exclude='*.swp' -cv . $$* | ssh larbreapages "tar:in larbreapages.fr"

browser-sync:
	@ ./node_modules/.bin/browser-sync start --proxy "http://0.0.0.0:${PORT}" --files "public/*"

lint:
	@ ./node_modules/.bin/eslint src/

lint-fix:
	@ ./node_modules/.bin/eslint --fix src/
