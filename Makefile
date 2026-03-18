.PHONY: dev build deploy clean

dev:
	npm run dev

build:
	npm run build

deploy: build
	rsync -avz --delete ./out/ keith@204.168.165.58:/var/www/portfolio/

clean:
	rm -rf .next out node_modules
