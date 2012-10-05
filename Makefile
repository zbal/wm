test:
	@NODE_ENV=test ./node_modules/.bin/mocha ./node_modules/wm-*/test/*.mocha.js

.PHONY: test
