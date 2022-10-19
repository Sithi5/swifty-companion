import { Text, View } from 'components/Themed';
import * as WebBrowser from 'expo-web-browser';
import { RootStackScreenProps } from 'navigation/types';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useAppSelector } from 'redux_toolkit/hooks';

WebBrowser.maybeCompleteAuthSession();

export default function Home({ navigation }: RootStackScreenProps<'Home'>) {
    const user = useAppSelector((state) => state.user);
    console.log('Home');
    console.log('user: ', user);

    return (
        <View
            style={{
                backgroundColor: 'grey',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <TouchableOpacity
                style={{
                    backgroundColor: '#009688',
                    width: '70%',
                    height: '10%',
                    alignItems: 'center',
                    borderRadius: 50,
                    justifyContent: 'center',
                }}
            >
                <Text>Search 42 user</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
    },
});
