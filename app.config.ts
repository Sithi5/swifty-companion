export default {
    expo: {
        name: 'swiftycompanion',
        description: 'A basic expo template using typescript.',
        slug: 'swiftycompanion',
        version: '1.0.0',
        orientation: 'portrait',
        icon: './assets/images/icon.png',
        scheme: 'swiftycompanion',
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
            bundleIdentifier: 'com.swiftycompanion',
        },
        android: {
            adaptiveIcon: {
                foregroundImage: './assets/images/adaptive-icon.png',
                backgroundColor: '#ffffff',
            },
            package: 'com.swiftycompanion',
            versionCode: 1,
        },
        web: {
            favicon: './assets/images/favicon.png',
        },
        typeRoots: ['./types'],
        owner: 'Sithis',
    },
};
