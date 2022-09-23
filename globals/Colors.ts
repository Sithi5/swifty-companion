export const blackColor = '#000000';
export const whiteColor = '#ffffff';
export const greyColor = '#cccccc';
export const lightGreyColor = '#F5F5F5';
export const redColor = 'red';
export const goldColor = 'gold';
export const greenColor = 'green';

export const primaryColor = greyColor;
export const secondaryColor = greenColor;

const tintColorLight = greyColor;
const tintColorDark = blackColor;

export default {
    light: {
        text: blackColor,
        textInput: whiteColor,
        background: whiteColor,
        statusBar: lightGreyColor,
        activityIndicator: greenColor,
        tint: tintColorLight,
        tabIconDefault: greyColor,
        tabIconSelected: goldColor,
    },
    dark: {
        text: blackColor,
        textInput: whiteColor,
        background: whiteColor,
        statusBar: lightGreyColor,
        activityIndicator: greenColor,
        tint: tintColorDark,
        tabIconDefault: greyColor,
        tabIconSelected: goldColor,
    },
};
