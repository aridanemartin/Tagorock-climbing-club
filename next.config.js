const nextTranslate = require('next-translate')

module.exports = {
    ...nextTranslate(),
    webpack: (config, { isServer }) => {
        if (!isServer) {
          config.resolve.fallback.fs = false;
        }
        return config;
    },
};
