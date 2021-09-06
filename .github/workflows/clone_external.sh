# Add external doc config
export config=$(cat .github/workflows/EXTERNAL_DOCS_CONFIG)
export replace_string='/\* AUTO GENERATED EXTERNAL DOCS CONFIG \*/'
perl -0pe 's#$ENV{replace_string}#$ENV{config}#' docusaurus.config.js > docusaurus.config.js.cpy
rm -f docusaurus.config.js && mv docusaurus.config.js.cpy docusaurus.config.js

# Add external doc dropdown config
export config=$(cat .github/workflows/EXTERNAL_DOCS_DROPDOWN_CONFIG)
export replace_string='/\* AUTO GENERATED EXTERNAL DOCS DROPDOWN CONFIG \*/'
perl -0pe 's#$ENV{replace_string}#$ENV{config}#' docusaurus.config.js > docusaurus.config.js.cpy
rm -f docusaurus.config.js && mv docusaurus.config.js.cpy docusaurus.config.js

# Create external docs folder
mkdir external
cd external

# Clone Bee
git clone --depth=1 https://github.com/iotaledger/bee --branch dev

# Clone GoShimmer
git clone --depth=1 --sparse https://github.com/iotaledger/goshimmer
cd goshimmer
git sparse-checkout set documentation
cp -rn documentation/static/img/* ../../static/img/
cd -

# Clone Wasp
git clone --depth=1 --sparse https://github.com/iotaledger/wasp
cd wasp
git sparse-checkout set documentation
cp -rn documentation/static/img/* ../../static/img/
cd -

# Clone iota.rs
git clone --depth=1 https://github.com/iotaledger/iota.rs
cp -rn iota.rs/documentation/static/img/* ../static/img/

# Clone wallet.rs
git clone --depth=1 https://github.com/iotaledger/wallet.rs
cp -rn wallet.rs/documentation/static/img/* ../static/img/

# Clone Stronghold
git clone --depth=1 --sparse https://github.com/iotaledger/stronghold.rs
cd stronghold.rs
git sparse-checkout set documentation
cd -

# Clone IOTA-2.0-Research-Specifications 
git clone --depth=1 https://github.com/iotaledger/IOTA-2.0-Research-Specifications --branch docusaurus

# Clone Chrysalis docs
git clone --depth=1 https://github.com/iotaledger/chrysalis-docs
cp -rn chrysalis-docs/static/img/* ../static/img/

# Clone Hornet
git clone --depth=1 https://github.com/gohornet/hornet
cp -rn hornet/documentation/static/img/* ../static/img/

# Clone Identity
git clone --depth=1 https://github.com/iotaledger/identity.rs
cp -rn identity.rs/documentation/static/img/* ../static/img/

# Return to root of repo
cd ..