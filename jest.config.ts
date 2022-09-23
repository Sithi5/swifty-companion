export default {
    roots: ['<rootDir>'],
    preset: 'react-native',
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],
    testEnvironment: 'jsdom',
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.spec.json',
        },
    },
    moduleNameMapper: {
        '^components(.*)$': '<rootDir>/components$1',
        '^navigation(.*)$': '<rootDir>/navigation$1',
        '^globals(.*)$': '<rootDir>/globals$1',
        '^screens(.*)$': '<rootDir>/screens$1',
        '^hooks(.*)$': '<rootDir>/hooks$1',
        '^redux_toolkit(.*)$': '<rootDir>/redux_toolkit$1',
        '^api(.*)$': '<rootDir>/api$1',
        '^utils(.*)$': '<rootDir>/utils$1',
        '^datas(.*)$': '<rootDir>/datas$1',
        '^languages(.*)$': '<rootDir>/languages$1',
    },
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    transformIgnorePatterns: [
        'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
