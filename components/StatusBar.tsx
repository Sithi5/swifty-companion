import { ThemeProps } from 'components/Themed';
import Constants from 'expo-constants';
import { whiteColor } from 'globals/Colors';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export type StatusBarProps = { backgroundColor?: string } & ThemeProps;

export function StatusBar(props: StatusBarProps) {
    const { backgroundColor = whiteColor, ...otherProps } = props;

    return (
        <View
            style={[{ backgroundColor: backgroundColor }, styles.StatusBar]}
            {...otherProps}
        ></View>
    );
}

const styles = StyleSheet.create({
    StatusBar: {
        height: Constants.statusBarHeight,
    },
});
