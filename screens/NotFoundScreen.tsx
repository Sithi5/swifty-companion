import { Text, View } from 'components/Themed';
import { translate } from 'languages';
import { RootStackScreenProps } from 'navigation/types';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

export default function NotFoundScreen({ navigation }: RootStackScreenProps<'NotFound'>) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{translate('screen_doesnt_exist')}</Text>
            <TouchableOpacity onPress={() => navigation.replace('Home')} style={styles.link}>
                <Text style={styles.linkText}>{translate('go_home')}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    },
    linkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});
