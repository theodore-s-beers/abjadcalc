#! /usr/local/bin/bash

find . -name "*.ts" -exec prettier --write {} \;
find . -name "*.ts" -exec ts-standard --fix {} \;
echo "TypeScript standardized"

find . -name "index.js" -exec prettier --write {} \;
find . -name "index.js" -exec standard --fix {} \;
echo "JavaScript standardized"
