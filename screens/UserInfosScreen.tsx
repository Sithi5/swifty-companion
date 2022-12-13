import { StatusBar } from 'components/StatusBar';
import { Text, View } from 'components/Themed';
import { LinearGradient } from 'expo-linear-gradient';
import * as WebBrowser from 'expo-web-browser';
import { globalStyles, coaBannerSize } from 'globals/GlobalStyles';
import { RootStackScreenProps } from 'navigation/types';
import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet } from 'react-native';
import { useAppSelector } from 'redux_toolkit/hooks';
import * as Progress from 'react-native-progress';

WebBrowser.maybeCompleteAuthSession();

const coalitionImages = {
    alliance: require('../images/alliance.jpg'),
    order: require('../images/order.jpg'),
    assembly: require('../images/assembly.jpg'),
    federation: require('../images/federation.jpg'),
};

export default function UserInfosScreen({ route }: RootStackScreenProps<'UserInfos'>) {
    console.log('USER INFOS SCREEN PAGE');
    const { userInfos } = route.params;
    console.log(userInfos);

    const user = useAppSelector((state) => state.user);
    const level = user.userInfos.userLevel;
    const levelbar = '0.' + level.toString().split('.')[1];

    console.log('levelbar ', levelbar);
    return (
        <View>
            <ImageBackground
                source={
                    user.userInfos.userCoalition === 'The Alliance'
                        ? coalitionImages.alliance
                        : user.userInfos.userCoalition === 'The Order'
                        ? coalitionImages.order
                        : user.userInfos.userCoalition === 'The Assembly'
                        ? coalitionImages.assembly
                        : coalitionImages.federation
                }
                style={styles.coaContainer}
            >
                <Text style={styles.text}>User : {userInfos.login}</Text>
                <View style={styles.barContainer}>
                    <Progress.Bar progress={parseFloat(levelbar)} />
                </View>
            </ImageBackground>
            <LinearGradient
                style={styles.mainContainer}
                colors={['black', 'grey']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <StatusBar />
                <Image
                    source={{
                        uri: userInfos.image.link,
                    }}
                    style={styles.userImage}
                />
                <Text>User code? : {userInfos.email}</Text>
                <Text>User code? : {userInfos.first_name}</Text>
                <Text>User code? : {userInfos.last_name}</Text>
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
    barContainer: {
        paddingRight: 10,
        paddingTop: 10,
        backgroundColor: 'transparent',
    },
    text: {
        paddingRight: 10,
        color: 'white',
    },
    coaContainer: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: coaBannerSize,
        zIndex: 2,
        justifyContent: 'center',
        resizeMode: 'cover',
        alignItems: 'flex-end',
        shadowOffset: {
            width: 0,
            height: 15,
        },
        shadowOpacity: 11,
        shadowRadius: 14,
        elevation: 14,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    userImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
});
