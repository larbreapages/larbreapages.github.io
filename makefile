deploy: ## Deploy application
	@ rm -rf public
	@ npm run build
	@ tar --exclude='node_modules' --exclude='.git' --exclude='src' --exclude='*.swp' -cv . $$* | ssh larbreapages "tar:in larbreapages.fr"
