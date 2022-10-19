import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type Props = {
    text: string;
    onPressFunction: () => void;
};

export default function PrimaryButton(props: Props) {
    const { text, onPressFunction } = props;
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => {
                onPressFunction();
            }}
        >
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        elevation: 8,
        backgroundColor: '#009688',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
        textTransform: 'uppercase',
    },
});
