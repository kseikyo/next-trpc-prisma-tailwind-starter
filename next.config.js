const withTM = require('next-transpile-modules')(['react-daisyui']);

module.exports = withTM({
  future: {
    webpack5: true,
  },
  webpack: (config, options) => {
    config.experiments = {
      layers: true,
      topLevelAwait: true,
    };
    return config;
  },

});
