#!/bin/sh

# Create temporaty directory to work in
mkdir tmp
cd tmp

# Download and copy docs
curl -sL https://s3.eu-central-1.amazonaws.com/files.iota.org/iota-wiki/iota-sdk/1.0/python.tar.gz | tar xzv
cp -Rv docs/python ../docs/build/iota-sdk/1.0/docs/references/

curl -sL https://s3.eu-central-1.amazonaws.com/files.iota.org/iota-wiki/iota-sdk/1.0/nodejs.tar.gz | tar xzv
cp -Rv docs/nodejs ../docs/build/iota-sdk/1.0/docs/references/

# Return to root and cleanup
cd -
rm -rf tmp
