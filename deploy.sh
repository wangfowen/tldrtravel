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
rm -rf static/* index.html
mkdir -p static
cp /tmp/bundle.js static
cp /tmp/index.html .
git add dist index.html
git commit -m "Automated yolo Deploy"
git push
git checkout -
