import PrimaryButton from 'components/PrimaryButton';
import { Text, View } from 'components/Themed';
import { LinearGradient } from 'expo-linear-gradient';
import * as WebBrowser from 'expo-web-browser';
import { globalStyles } from 'globals/GlobalStyles';
import { RootStackScreenProps } from 'navigation/types';
import React from 'react';
import * as Progress from 'react-native-progress';
import { StyleSheet, TextInput, Image, ImageBackground } from 'react-native';
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
    const coa = ['assembly', 'order', 'federation', 'alliance'];
    const coaColor = ['#E300EB', '#F50502', '#05DFF7', '#00EB14'];

    return (
        <View style={styles.mainContainer}>
            <LinearGradient
                colors={['black', 'grey']}
                style={styles.mainContainer}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <View style={styles.coaContainer}>
                    <ImageBackground
                        style={styles.imageBackGround}
                        source={require('../images/assembly.jpg')}
                    ></ImageBackground>
                    <Text style={styles.text}>User : {student}</Text>
                    <Text style={styles.text}>Level: {level}</Text>
                    <Progress.Bar progress={parseFloat(levelbar)} style={styles.bar} />
                </View>
                <Text></Text>
                <Image
                    style={{ resizeMode: 'cover', width: 350, height: 290 }}
                    source={require('../images/logo.png')}
                ></Image>
                <Text></Text>
                <TextInput
                    style={styles.input}
                    placeholder="Type user name"
                    onChangeText={onChangeText}
                    value={text}
                />
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
    coaContainer: {
        position: 'relative',
        marginTop: -150,
        width: 400,
        height: 200,
        shadowColor: '#E300EB',
        shadowOffset: {
            width: 0,
            height: 15,
        },
        shadowOpacity: 11,
        shadowRadius: 14,
        elevation: 14,
        borderColor: '#E300EB',
    },
    imageBackGround: {
        height: 200,
        width: 410,
        flexDirection: 'row',
        justifyContent: 'center',
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
        top: -100,
        left: 200,
        color: 'white',
    },
});
