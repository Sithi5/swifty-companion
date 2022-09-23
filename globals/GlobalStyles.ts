import { StyleSheet } from 'react-native';

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

// FONTS
const thinFont = 'azo-sans-thin';
const lightFont = 'azo-sans-light';
const regularFont = 'azo-sans-regular';
const mediumFont = 'azo-sans-medium';
const boldFont = 'azo-sans-bold';
const blackFont = 'azo-sans-black';

const h1Styles = {
    h1: {
        fontSize: h1Size,
        fontFamily: blackFont,
    },
    h1Bold: {
        fontSize: h1Size,
        fontFamily: boldFont,
    },
    h1Medium: {
        fontSize: h1Size,
        fontFamily: mediumFont,
    },
    h1Regular: {
        fontSize: h1Size,
        fontFamily: regularFont,
    },
    h1Light: {
        fontSize: h1Size,
        fontFamily: lightFont,
    },
    h1Thin: {
        fontSize: h1Size,
        fontFamily: thinFont,
    },
};

const h2Styles = {
    h2Black: {
        fontSize: h2Size,
        fontFamily: blackFont,
    },
    h2: {
        fontSize: h2Size,
        fontFamily: boldFont,
    },
    h2Medium: {
        fontSize: h2Size,
        fontFamily: mediumFont,
    },
    h2Regular: {
        fontSize: h2Size,
        fontFamily: regularFont,
    },
    h2Light: {
        fontSize: h2Size,
        fontFamily: lightFont,
    },
    h2Thin: {
        fontSize: h2Size,
        fontFamily: thinFont,
    },
};

const h3Styles = {
    h3Black: {
        fontSize: h3Size,
        fontFamily: blackFont,
    },
    h3Bold: {
        fontSize: h3Size,
        fontFamily: boldFont,
    },
    h3: {
        fontSize: h3Size,
        fontFamily: mediumFont,
    },
    h3Regular: {
        fontSize: h3Size,
        fontFamily: regularFont,
    },
    h3Light: {
        fontSize: h3Size,
        fontFamily: lightFont,
    },
    h3Thin: {
        fontSize: h3Size,
        fontFamily: thinFont,
    },
};

const h4Styles = {
    h4Black: {
        fontSize: h4Size,
        fontFamily: blackFont,
    },
    h4Bold: {
        fontSize: h4Size,
        fontFamily: boldFont,
    },
    h4Medium: {
        fontSize: h4Size,
        fontFamily: mediumFont,
    },
    h4: {
        fontSize: h4Size,
        fontFamily: regularFont,
    },
    h4Light: {
        fontSize: h4Size,
        fontFamily: lightFont,
    },
    h4Thin: {
        fontSize: h4Size,
        fontFamily: thinFont,
    },
};

const bodyStyles = {
    smallBodyThin: {
        fontSize: smallBodySize,
        fontFamily: thinFont,
    },
    smallBody: {
        fontSize: smallBodySize,
        fontFamily: lightFont,
    },
    smallBodyRegular: {
        fontSize: smallBodySize,
        fontFamily: regularFont,
    },
    smallBodyMedium: {
        fontSize: smallBodySize,
        fontFamily: mediumFont,
    },
    smallBodyBold: {
        fontSize: smallBodySize,
        fontFamily: boldFont,
    },
    smallBodyBlack: {
        fontSize: smallBodySize,
        fontFamily: blackFont,
    },
    bodyThin: {
        fontSize: bodySize,
        fontFamily: thinFont,
    },
    bodyLight: {
        fontSize: bodySize,
        fontFamily: lightFont,
    },
    body: {
        fontSize: bodySize,
        fontFamily: regularFont,
    },
    bodyMedium: {
        fontSize: bodySize,
        fontFamily: mediumFont,
    },
    bodyBold: {
        fontSize: bodySize,
        fontFamily: boldFont,
    },
    bodyBlack: {
        fontSize: bodySize,
        fontFamily: blackFont,
    },
    largeBodyThin: {
        fontSize: largeBodySize,
        fontFamily: thinFont,
    },
    largeBodyLight: {
        fontSize: largeBodySize,
        fontFamily: lightFont,
    },
    largeBodyRegular: {
        fontSize: largeBodySize,
        fontFamily: regularFont,
    },
    largeBody: {
        fontSize: largeBodySize,
        fontFamily: mediumFont,
    },
    largeBodyBold: {
        fontSize: largeBodySize,
        fontFamily: boldFont,
    },
    largeBodyBlack: {
        fontSize: largeBodySize,
        fontFamily: blackFont,
    },
};

const lighTextStyles = {
    smallLightText: {
        fontSize: smallTextSize,
        fontFamily: lightFont,
    },
    smallText: {
        fontSize: smallTextSize,
        fontFamily: regularFont,
    },
    smallBoldText: {
        fontSize: smallTextSize,
        fontFamily: boldFont,
    },
    xSmallLightText: {
        fontSize: xSmallTextSize,
        fontFamily: lightFont,
    },
    xSmallText: {
        fontSize: xSmallTextSize,
        fontFamily: regularFont,
    },
    xSmallBoldText: {
        fontSize: xSmallTextSize,
        fontFamily: boldFont,
    },
    xxSmallLightText: {
        fontSize: xxSmallTextSize,
        fontFamily: lightFont,
    },
    xxSmallText: {
        fontSize: xxSmallTextSize,
        fontFamily: regularFont,
    },
    xxSmallBoldText: {
        fontSize: xxSmallTextSize,
        fontFamily: boldFont,
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

export { globalStyles, defaultMargin, defaultPadding, defaultBorderRadius, regularFont };
