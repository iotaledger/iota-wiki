# Create temporaty directory to work in and clone SDK
mkdir tmp && cd tmp
git clone --depth 1 --branch develop https://github.com/iotaledger/iota-sdk
cd iota-sdk

# Generate and copy Python references
cd bindings/python
python -m venv .venv
source .venv/bin/activate
pip install -r requirements-dev.txt
PYTHONPATH=. pydoc-markdown
cp -Rv docs/references/python ../../../../next/docs/iota-sdk/docs/references/
deactivate
cd -

# Generate and copy Node.js references
cd bindings/nodejs
# The SDK still uses yarn classic: https://github.com/iotaledger/iota-sdk/issues/433
yarn set version classic
yarn
yarn create-api-docs --out ../../../../next/docs/iota-sdk/docs/references/nodejs
cd -

# Return to root and cleanup
cd ../../
rm -rf tmp
