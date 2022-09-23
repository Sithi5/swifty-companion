// eslint-disable-next-line no-undef
module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['module:metro-react-native-babel-preset'],
        plugins: [
            [
                'module:react-native-dotenv',
                {
                    envName: 'APP_ENV',
                    moduleName: '@env',
                    path: '.env',
                    blocklist: null,
                    allowlist: null,
                    safe: false,
                    allowUndefined: true,
                },
            ],
            [
                'module-resolver',
                {
                    alias: {
                        components: './components',
                        navigation: './navigation',
                        globals: './globals',
                        screens: './screens',
                        hooks: './hooks',
                        redux_toolkit: './redux_toolkit',
                        api: './api',
                        utils: './utils',
                        languages: './languages',
                    },
                    root: ['.'],
                },
            ],
        ],
    };
};
