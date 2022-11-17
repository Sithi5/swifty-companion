import PrimaryButton from 'components/PrimaryButton';
import { Text, View } from 'components/Themed';
import { LinearGradient } from 'expo-linear-gradient';
import * as WebBrowser from 'expo-web-browser';
import { globalStyles } from 'globals/GlobalStyles';
import { RootStackScreenProps } from 'navigation/types';
import React from 'react';
import * as Progress from 'react-native-progress';
import { StatusBar } from 'expo-status-bar';
import { GetUser } from 'api/42ApiCall';
import {
    StyleSheet,
    TextInput,
    Image,
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { useAppSelector } from 'redux_toolkit/hooks';

WebBrowser.maybeCompleteAuthSession();

export default function Home({ navigation }: RootStackScreenProps<'Home'>) {
    const user = useAppSelector((state) => state.user);
    console.log('Home');
    console.log('user: ', user);

    const level = '19.48';
    const levelbar = '0.' + level.slice(-2);
    const student = 'maginist';
    const [text, onChangeText] = React.useState('');
    const coa = 'alliance';
    const coaColor = '#05DFF7';
    // const coaColor = '#E300EB'
    //     ? coa === 'assembly'
    //     : '05DFF7'
    //     ? coa === 'federation'
    //     : '#00EB14'
    //     ? coa === 'alliance'
    //     : '#F50502';

    return (
        <View>
            <StatusBar backgroundColor="white" />
            <View style={[{ shadowColor: coaColor, borderColor: coaColor }, styles.coaContainer]}>
                <ImageBackground
                    style={styles.imageBackGround}
                    resizeMode="contain"
                    source={require('../images/' + coa + '.jpg')}
                ></ImageBackground>
                <Text style={styles.text}>User : {student}</Text>
                <Text style={styles.text}>Level: {level}</Text>
                <Progress.Bar progress={parseFloat(levelbar)} style={styles.bar} />
            </View>
            <View style={{ borderRadius: 15 }}>
                <LinearGradient
                    colors={['black', 'grey']}
                    style={styles.mainContainer}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                >
                    <Image
                        style={{
                            width: 350,
                            height: 290,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        source={require('../images/logo.png')}
                    ></Image>

                    <TextInput
                        style={styles.input}
                        placeholder="Type user name"
                        onChangeText={onChangeText}
                        value={text}
                    />
                    <PrimaryButton
                        text="Search 42 user"
                        onPressFunction={() => {
                            GetUser(text);
                            return;
                        }}
                    ></PrimaryButton>
                </LinearGradient>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        zIndex: 2,
        height: '100%',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },
    coaContainer: {
        zIndex: 1,
        position: 'absolute',
        width: '100%',
        height: 193,
        shadowOffset: {
            width: 0,
            height: 15,
        },
        shadowOpacity: 11,
        shadowRadius: 14,
        elevation: 14,
    },
    imageBackGround: {
        width: '100%',
        height: undefined,
        aspectRatio: 2,
    },
    title: {
        color: 'white',
        fontSize: globalStyles.h1.fontSize,
    },
    input: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        backgroundColor: 'lightgrey',
        color: 'black',
        width: 170,
        borderRadius: 3,
    },
    bar: {
        top: -100,
        left: 200,
    },
    text: {
        zIndex: 1,
        top: -100,
        left: 200,
        color: 'white',
    },
});
