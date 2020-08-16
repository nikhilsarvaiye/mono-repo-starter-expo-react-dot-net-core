module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    alias: {
                        '@library': './client/library',
                        '@components': './client/components',
                        '@screens': './client/screens',
                    },
                },
            ],
        ],
    };
};
