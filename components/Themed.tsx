/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import Colors from 'globals/Colors';
import useColorScheme from 'hooks/useColorScheme';
import React from 'react';
import {
    ActivityIndicator as DefaultActivityIndicator,
    KeyboardAvoidingView as DefaultKeyboardAvoidingView,
    SafeAreaView as DefaultSafeAreaView,
    ScrollView as DefaultScrollView,
    Text as DefaultText,
    TextInput as DefaultTextInput,
    View as DefaultView,
} from 'react-native';

export function useThemeColor(
    props: { light?: string; dark?: string },
    colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
    const theme = useColorScheme();
    const colorFromProps = props[theme];

    if (colorFromProps) {
        return colorFromProps;
    } else {
        return Colors[theme][colorName];
    }
}

export type ThemeProps = {
    lightColor?: string;
    darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type TextInputProps = ThemeProps & DefaultTextInput['props'];
export type ActivityIndicator = ThemeProps & DefaultActivityIndicator['props'];
export type KeyboardAvoidingViewProps = ThemeProps & DefaultKeyboardAvoidingView['props'];
export type SafeAreaViewProps = ThemeProps & DefaultSafeAreaView['props'];
export type ScrollViewProps = ThemeProps & DefaultScrollView['props'];

export function Text(props: TextProps) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

    return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

    return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function TextInput(props: TextInputProps) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'textInput');

    return <DefaultTextInput style={[{ color }, style]} {...otherProps} />;
}

export function ActivityIndicator(props: ActivityIndicator) {
    const { lightColor, darkColor, ...otherProps } = props;
    const Color = useThemeColor({ light: lightColor, dark: darkColor }, 'activityIndicator');

    return <DefaultActivityIndicator color={Color} {...otherProps} />;
}

export function SafeAreaView(props: SafeAreaViewProps) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

    return <DefaultSafeAreaView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function ScrollView(props: ScrollViewProps) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

    return <DefaultScrollView style={[{ backgroundColor }, style]} {...otherProps} />;
}
