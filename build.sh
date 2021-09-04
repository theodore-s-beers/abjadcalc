#! /usr/bin/env bash

set -Eeuo pipefail

sort-package-json &&
	npm install &&
	npm run compile &&
	mv typescript/index-main.js js/index.js &&
	mv typescript/index-ime.js ime/js/index.js &&
	npm run prettify &&
	npm run standardize &&
	npm run lint-css
