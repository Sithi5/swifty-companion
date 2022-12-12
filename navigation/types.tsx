/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { UserResponseType } from 'api/42ApiTypes';

export type RootStackParamList = {
    Home: undefined;
    UserInfos: { userInfos: UserResponseType };
    Modal: undefined;
    NotFound: undefined;
    OauthLogin: undefined;
};

// Screen props
export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
    RootStackParamList,
    Screen
>;

// Navigation props

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}
