const nextTranslate = require('next-translate')

module.exports = {
    ...nextTranslate(),
    generateBuildId: async () => {
        // You can, for example, get the latest git commit hash here
        return 'my-build-id'
    },
};


