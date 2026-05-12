#! /usr/bin/env bash

set -euo pipefail

sort-package-json
pnpm i
pnpm run format
pnpm run lint
pnpm run check
pnpm run compile-main
pnpm run compile-ime
