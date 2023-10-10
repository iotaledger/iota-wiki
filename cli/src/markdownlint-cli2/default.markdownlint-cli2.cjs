// @ts-check
const _ = require('lodash');

('use strict');

const { env } = require('process');
var custom_config = null;
if (env.CUSTOM_CONFIG) {
  custom_config = require(env.PWD + '/' + env.CUSTOM_CONFIG);
}

const default_config = {
  config: {
    MD007: {
      indent: 2,
    },
    MD010: {
      code_blocks: false,
    },
    MD013: false,
    MD033: false,
    MD034: false,
    MD041: false,
  },
};

const config = custom_config
  ? _.defaultsDeep(custom_config, default_config)
  : default_config;
module.exports = config;
