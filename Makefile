
build: components
	component build

components: component.json
	component install

test: node_modules build
	component test phantom test.js

.PHONY: build test components
