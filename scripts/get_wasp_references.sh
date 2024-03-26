#!/bin/sh

# Create temporaty directory to work in
mkdir tmp
cd tmp

# Download and copy docs
curl -sL https://s3.eu-central-1.amazonaws.com/files.iota.org/iota-wiki/wasp/1.0/iscmagic.tar.gz | tar xzv
cp -Rv docs/iscmagic/* ../docs/build/isc/v1.0.0-rc.6/docs/reference/magic-contract/

curl -sL https://s3.eu-central-1.amazonaws.com/files.iota.org/iota-wiki/wasp/1.0/iscutils.tar.gz | tar xzv
cp -Rv docs/iscutils ../docs/build/isc/v1.0.0-rc.6/docs/reference/

# Return to root and cleanup
cd -
rm -rf tmp
