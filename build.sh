#! /usr/bin/env bash

set -Eeuo pipefail

sort-package-json &&
	pnpm i &&
	dum format &&
	dum lint &&
	dum check &&
	dum compile-main &&
	dum compile-ime
