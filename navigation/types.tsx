/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabNavigationProp, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootTabParamList = {
    Home: undefined;
};

export type RootStackParamList = {
    Root: NavigatorScreenParams<RootTabParamList> | undefined;
    Modal: undefined;
    NotFound: undefined;
};

// Screen props
export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
    RootStackParamList,
    Screen
>;

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
>;

// Navigation props
export type RootTabNavigationProp<Navigation extends keyof RootTabParamList> =
    BottomTabNavigationProp<RootTabParamList, Navigation>;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}
