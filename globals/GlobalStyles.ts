import { StyleSheet } from 'react-native';

const coaBannerSize = 150;

const defaultMargin = 10;
const defaultPadding = 10;
const defaultBorderRadius = 16;

// SIZES
const h1Size = 26;
const h2Size = 24;
const h3Size = 22;
const h4Size = 20;
const smallBodySize = 12;
const bodySize = 14;
const largeBodySize = 16;
const smallTextSize = 10;
const xSmallTextSize = 8;
const xxSmallTextSize = 7;

const h1Styles = {
    h1: {
        fontSize: h1Size,
    },
    h1Bold: {
        fontSize: h1Size,
    },
    h1Medium: {
        fontSize: h1Size,
    },
    h1Regular: {
        fontSize: h1Size,
    },
    h1Light: {
        fontSize: h1Size,
    },
    h1Thin: {
        fontSize: h1Size,
    },
};

const h2Styles = {
    h2Black: {
        fontSize: h2Size,
    },
    h2: {
        fontSize: h2Size,
    },
    h2Medium: {
        fontSize: h2Size,
    },
    h2Regular: {
        fontSize: h2Size,
    },
    h2Light: {
        fontSize: h2Size,
    },
    h2Thin: {
        fontSize: h2Size,
    },
};

const h3Styles = {
    h3Black: {
        fontSize: h3Size,
    },
    h3Bold: {
        fontSize: h3Size,
    },
    h3: {
        fontSize: h3Size,
    },
    h3Regular: {
        fontSize: h3Size,
    },
    h3Light: {
        fontSize: h3Size,
    },
    h3Thin: {
        fontSize: h3Size,
    },
};

const h4Styles = {
    h4Black: {
        fontSize: h4Size,
    },
    h4Bold: {
        fontSize: h4Size,
    },
    h4Medium: {
        fontSize: h4Size,
    },
    h4: {
        fontSize: h4Size,
    },
    h4Light: {
        fontSize: h4Size,
    },
    h4Thin: {
        fontSize: h4Size,
    },
};

const bodyStyles = {
    smallBodyThin: {
        fontSize: smallBodySize,
    },
    smallBody: {
        fontSize: smallBodySize,
    },
    smallBodyRegular: {
        fontSize: smallBodySize,
    },
    smallBodyMedium: {
        fontSize: smallBodySize,
    },
    smallBodyBold: {
        fontSize: smallBodySize,
    },
    smallBodyBlack: {
        fontSize: smallBodySize,
    },
    bodyThin: {
        fontSize: bodySize,
    },
    bodyLight: {
        fontSize: bodySize,
    },
    body: {
        fontSize: bodySize,
    },
    bodyMedium: {
        fontSize: bodySize,
    },
    bodyBold: {
        fontSize: bodySize,
    },
    bodyBlack: {
        fontSize: bodySize,
    },
    largeBodyThin: {
        fontSize: largeBodySize,
    },
    largeBodyLight: {
        fontSize: largeBodySize,
    },
    largeBodyRegular: {
        fontSize: largeBodySize,
    },
    largeBody: {
        fontSize: largeBodySize,
    },
    largeBodyBold: {
        fontSize: largeBodySize,
    },
    largeBodyBlack: {
        fontSize: largeBodySize,
    },
};

const lighTextStyles = {
    smallLightText: {
        fontSize: smallTextSize,
    },
    smallText: {
        fontSize: smallTextSize,
    },
    smallBoldText: {
        fontSize: smallTextSize,
    },
    xSmallLightText: {
        fontSize: xSmallTextSize,
    },
    xSmallText: {
        fontSize: xSmallTextSize,
    },
    xSmallBoldText: {
        fontSize: xSmallTextSize,
    },
    xxSmallLightText: {
        fontSize: xxSmallTextSize,
    },
    xxSmallText: {
        fontSize: xxSmallTextSize,
    },
    xxSmallBoldText: {
        fontSize: xxSmallTextSize,
    },
};

const paddingStyles = {
    pv10: {
        paddingVertical: defaultPadding,
    },
    pv15: {
        paddingVertical: defaultPadding * 1.5,
    },
    pv20: {
        paddingVertical: defaultPadding * 2,
    },
    pv40: {
        paddingVertical: defaultPadding * 4,
    },
    pv50: {
        paddingVertical: defaultPadding * 5,
    },
    ph10: {
        paddingHorizontal: defaultPadding,
    },
    ph15: {
        paddingHorizontal: defaultPadding * 1.5,
    },
    ph20: {
        paddingHorizontal: defaultPadding * 2,
    },
    ph40: {
        paddingHorizontal: defaultPadding * 4,
    },
    ph50: {
        paddingHorizontal: defaultPadding * 5,
    },
    p10: {
        padding: defaultPadding,
    },
    p15: {
        padding: defaultPadding * 1.5,
    },
    p20: {
        padding: defaultPadding * 2,
    },
    p40: {
        padding: defaultPadding * 4,
    },
    p50: {
        padding: defaultPadding * 5,
    },
};

const marginStyles = {
    mv10: {
        marginVertical: defaultPadding,
    },
    mv15: {
        marginVertical: defaultPadding * 1.5,
    },
    mv20: {
        marginVertical: defaultPadding * 2,
    },
    mv40: {
        marginVertical: defaultPadding * 4,
    },
    mv50: {
        marginVertical: defaultPadding * 5,
    },
    mh10: {
        marginHorizontal: defaultPadding,
    },
    mh15: {
        marginHorizontal: defaultPadding * 1.5,
    },
    mh20: {
        marginHorizontal: defaultPadding * 2,
    },
    mh40: {
        marginHorizontal: defaultPadding * 4,
    },
    mh50: {
        marginHorizontal: defaultPadding * 5,
    },
    m10: {
        margin: defaultPadding,
    },
    m15: {
        margin: defaultPadding * 1.5,
    },
    m20: {
        margin: defaultPadding * 2,
    },
    m40: {
        margin: defaultPadding * 4,
    },
    m50: {
        margin: defaultPadding * 5,
    },
};

const globalStyles = StyleSheet.create({
    ...paddingStyles,
    ...marginStyles,
    ...h1Styles,
    ...h2Styles,
    ...h3Styles,
    ...h4Styles,
    ...bodyStyles,
    ...lighTextStyles,
});

export { globalStyles, defaultMargin, defaultPadding, defaultBorderRadius, coaBannerSize };
