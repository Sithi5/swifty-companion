import Constants from 'expo-constants';

function getBuildMode() {
    const BUILD_MODE = Constants?.expoConfig?.extra?.BUILD_MODE;
    if (!BUILD_MODE) {
        throw new Error('BUILD_MODE is missing.');
    }
    return BUILD_MODE;
}

function getApiUID() {
    const API_UID = Constants?.expoConfig?.extra?.API_UID;
    if (!API_UID) {
        throw new Error('API_UID is missing.');
    }
    return API_UID;
}

function getApiSecret() {
    const API_SECRET = Constants?.expoConfig?.extra?.API_SECRET;
    if (!API_SECRET) {
        throw new Error('API_SECRET is missing.');
    }
    return API_SECRET;
}

const BUILD_MODE = getBuildMode();
const API_UID = getApiUID();
const API_SECRET = getApiSecret();

export default {
    BUILD_MODE,
    API_UID,
    API_SECRET,
};
