#!/bin/sh
set -ex

die() {
  echo "FATAL ERROR: $@"
  exit 1
}

# Ensure the repository isn't dirty
[ `git status -u -s | wc -c` -eq 0 ] \
      || die "You must commit your changes before deploying."

npm run build
cp dist/bundle.js index.html /tmp/
git checkout gh-pages
rm -rf dist/* index.html
mkdir -p dist
cp /tmp/bundle.js dist
cp /tmp/index.html .
git commit -A -m "Deploy"
git push
git checkout -
