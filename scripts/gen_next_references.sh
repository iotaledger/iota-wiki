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
cp -r docs/references/ ../../../../next/docs/iota-sdk/docs/references/
deactivate
cd -

# Generate and copy Node.js references
cd bindings/nodejs
# The SDK still uses yarn classic: https://github.com/iotaledger/iota-sdk/issues/433
yarn set version classic
yarn
npx typedoc --githubPages false --disableSources --excludePrivate --excludeInternal --excludeNotDocumented --plugin typedoc-plugin-markdown --theme markdown --hideBreadcrumbs --entryDocument api_ref.md --readme none --hideGenerator --sort source-order --exclude ./**/src/index.ts --out ../../../../next/docs/iota-sdk/docs/references/nodejs ./lib/index.ts
cd -

# Return to root and cleanup
cd ../../
rm -rf tmp