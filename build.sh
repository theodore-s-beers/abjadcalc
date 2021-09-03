#! /usr/bin/env bash

set -Eeuo pipefail

sort-package-json &&
	npm install &&
	npm run prettify-ts &&
	npm run standardize-ts &&
	npm run compile-main &&
	mv typescript/index-main.js js/index.js &&
	npm run compile-ime &&
	mv typescript/index-ime.js ime/js/index.js &&
	npm run prettify-js &&
	npm run standardize-js &&
	npm run prettify-sw &&
	npm run standardize-sw &&
	npm run prettify-html &&
	npm run lint-css
