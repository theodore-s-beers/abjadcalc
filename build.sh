#! /usr/bin/env bash

set -Eeuo pipefail

sort-package-json &&
	npm install &&
	npm run prettify &&
	npm run standardize &&
	npm run check &&
	npm run compile-main &&
	npm run compile-ime &&
	npm run lint-css
