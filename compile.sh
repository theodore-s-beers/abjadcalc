#! /usr/local/bin/bash

find . -name "*.ts" -exec tsc -t "ESNext" {} \;
