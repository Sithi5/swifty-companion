import PrimaryButton from 'components/PrimaryButton';
import { Text, TextInput, View } from 'components/Themed';
import { LinearGradient } from 'expo-linear-gradient';
import * as WebBrowser from 'expo-web-browser';
import { globalStyles } from 'globals/GlobalStyles';
import { RootStackScreenProps } from 'navigation/types';
import React from 'react';
import { StyleSheet } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

export default function Home({ navigation }: RootStackScreenProps<'Home'>) {
    const [text, onChangeText] = React.useState('');

    return (
        <View style={styles.mainContainer}>
            <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
            <LinearGradient
                colors={['black', 'grey']}
                style={styles.mainContainer}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <Text style={styles.title}>Swifty-companion</Text>
                <PrimaryButton
                    text="Search 42 user"
                    onPressFunction={() => {
                        navigation.navigate('UserInfos', {
                            userName: text,
                        });
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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
