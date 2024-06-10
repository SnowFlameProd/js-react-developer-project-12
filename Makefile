build:
	rm frontend/build -rf
	npm run build

install:
	npm ci

start-frontend:
	make -C frontend start

start-backend:
	npm start

local-start:
	make start-backend & make start-frontend

start:
	make start-backend