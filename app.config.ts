export default {
    expo: {
        name: 'Sithi5BaseExpoTemplate',
        description: 'A basic expo template using typescript.',
        slug: 'Sithi5BaseExpoTemplate',
        version: '1.0.0',
        orientation: 'portrait',
        icon: './assets/images/icon.png',
        scheme: 'sithi5baseexpotemplate',
        userInterfaceStyle: 'automatic',
        splash: {
            image: './assets/images/splash.png',
            resizeMode: 'contain',
            backgroundColor: '#ffffff',
        },
        updates: {
            fallbackToCacheTimeout: 0,
        },
        assetBundlePatterns: ['**/*'],
        ios: {
            supportsTablet: true,
            bundleIdentifier: 'com.sithi5baseexpotemplate',
        },
        android: {
            adaptiveIcon: {
                foregroundImage: './assets/images/adaptive-icon.png',
                backgroundColor: '#ffffff',
            },
            package: 'com.sithi5baseexpotemplate',
            versionCode: 1,
        },
        web: {
            favicon: './assets/images/favicon.png',
        },
        typeRoots: ['./types'],
        owner: 'Sithis',
    },
};
