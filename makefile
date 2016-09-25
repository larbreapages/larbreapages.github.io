install: ## Install application
	@ npm i

run: ## Run application
	@ echo '* Start webpack dev server *'
	@ NODE_ENV=development TARGET=web ./node_modules/.bin/webpack-dev-server \
		-d \
		--host=0.0.0.0 \
		--port 9000 \
		--colors \
		--progress \
		--no-info \
		--hot \
		--inline

build: ## Build with webpack
	@ mkdir -p dist
	@ ./node_modules/.bin/webpack -p --progress --colors
	@ cp src/robots.txt dist/
	@ cp src/favicon.ico dist/
	@ cp src/sitemap.xml dist/

deploy: build ## Deploy application
	@ echo 'larbreapages.fr' > dist/CNAME
	@ git add dist && git commit -m "Deploy"
	@ git push origin :gh-pages
	@ git subtree push --prefix dist origin gh-pages
	@ git reset --soft HEAD~1
	@ git reset HEAD dist
	@ rm -rf dist/
