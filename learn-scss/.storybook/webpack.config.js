const custom = require("../webpack.config.js");

module.exports = async ({ config }) => {
  return {
    ...config,
    module: { ...config.module, rules: custom.module.rules },
    plugins: [...config.plugins, ...custom.plugins]
  };
};
