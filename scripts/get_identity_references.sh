#!/bin/sh

# Create temporaty directory to work in
mkdir tmp
cd tmp

# Download and copy docs
curl -sL https://s3.eu-central-1.amazonaws.com/files.iota.org/iota-wiki/iota-identity/1.3/wasm.tar.gz | tar xzv
cp -Rv docs/* ../docs/build/identity.rs/1.3/docs/references/

curl -sL https://s3.eu-central-1.amazonaws.com/files.iota.org/iota-wiki/iota-identity/1.4/wasm.tar.gz | tar xzv
cp -Rv docs/* ../docs/build/identity.rs/1.4/docs/references/

# Return to root and cleanup
cd -
rm -rf tmp
 