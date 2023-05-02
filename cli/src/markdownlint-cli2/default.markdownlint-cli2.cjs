// @ts-check
const _ = require("lodash");

"use strict";

const { env } = require("process");
var custom_config = null;
if (env.CUSTOM_CONFIG) {
    custom_config = require(env.PWD + '/' + env.CUSTOM_CONFIG);
}

// Print CUSTOM_CONFIG environment variable.
console.log("CONFIG:", env.CUSTOM_CONFIG);

// Print current working directory.
console.log("CWD:", env.PWD);

const default_config = {
    "config": {
        //TODO Figure out sensible defaults
    }
};

const config = custom_config ? _.defaultsDeep(custom_config, default_config) : default_config;

console.log(JSON.stringify(config, null, 2));

module.exports = config;