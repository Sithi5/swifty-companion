import { API_KEY } from '@env';
import PrimaryButton from 'components/PrimaryButton';
import {
    globalStyles,
    defaultMargin,
    defaultPadding,
    defaultBorderRadius,
} from 'globals/GlobalStyles';
import { View, Text } from 'components/Themed';
import { translate } from 'languages';
import { RootTabScreenProps } from 'navigation/types';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home({ navigation }: RootTabScreenProps<'Home'>) {
    return (
        <View style={styles.mainContainer}>
            <LinearGradient
                colors={['black', 'grey']}
                style={styles.mainContainer}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <Image
                    style={{ resizeMode: 'cover', width: '75%', height: '30%' }}
                    source={require('/home/mathieu/42/swifty-companion/assets/images/logo.png')}
                ></Image>
                <Text style={styles.title}>42</Text>
                <Text style={styles.title}>Swifty-companion</Text>
                <Text></Text>
                <PrimaryButton
                    text="Log in with 42"
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
