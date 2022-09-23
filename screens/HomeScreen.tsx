import { API_KEY } from '@env';
import { ScrollView, Text } from 'components/Themed';
import { translate } from 'languages';
import { RootTabScreenProps } from 'navigation/types';
import React from 'react';
import { StyleSheet } from 'react-native';

export default function Home({ navigation }: RootTabScreenProps<'Home'>) {
    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
            <Text style={styles.title}>{translate('hello_world')}</Text>
            <Text style={styles.title}>{API_KEY}</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
    },
});
