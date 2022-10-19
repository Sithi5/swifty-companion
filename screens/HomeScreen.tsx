import PrimaryButton from 'components/PrimaryButton';
import { Text, View } from 'components/Themed';
import { LinearGradient } from 'expo-linear-gradient';
import * as WebBrowser from 'expo-web-browser';
import { globalStyles } from 'globals/GlobalStyles';
import { RootStackScreenProps } from 'navigation/types';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useAppSelector } from 'redux_toolkit/hooks';

WebBrowser.maybeCompleteAuthSession();

export default function Home({ navigation }: RootStackScreenProps<'Home'>) {
    const user = useAppSelector((state) => state.user);
    console.log('Home');
    console.log('user: ', user);

    return (
        <View style={styles.mainContainer}>
            <LinearGradient
                colors={['black', 'grey']}
                style={styles.mainContainer}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <Text style={styles.title}>Swifty-companion</Text>
                <Text></Text>
                <PrimaryButton
                    text="Search 42 user"
                    onPressFunction={() => {
                        return;
                    }}
                ></PrimaryButton>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontSize: globalStyles.h1.fontSize,
    },
});
