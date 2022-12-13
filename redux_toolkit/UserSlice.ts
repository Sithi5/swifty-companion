import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserTokenData = {
    accessToken: string;
    accessTokenCreatedAt: string | undefined;
    accessTokenExpiresIn: string | undefined;
    refreshToken: string | undefined;
};

export type UserInfos = {
    userLogin: string;
    userLevel: string;
    userCoalition: string;
    userImage: string;
};

export type UserState = {
    logged: boolean;
    userTokenData: UserTokenData;
    userInfos: UserInfos;
};

const initialState: UserState = {
    logged: false,
    userTokenData: {
        accessToken: '',
        accessTokenCreatedAt: undefined,
        accessTokenExpiresIn: undefined,
        refreshToken: undefined,
    },
    userInfos: {
        userLogin: '',
        userLevel: '',
        userCoalition: '',
        userImage: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alwancolor.com%2Faafbaejshop%2F2015%2F09%2F30%2Fstar-wars-the-force-awakens-first-order-stormtrooper-helmet%2F&psig=AOvVaw0paK91TOCylm8LsNV00lSL&ust=1671012713323000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOipucut9vsCFQAAAAAdAAAAABAT',
    },
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserLogged(state, action: PayloadAction<boolean>) {
            state.logged = action.payload;
        },
        setUserInfos(state, action: PayloadAction<UserInfos>) {
            state.userInfos = action.payload;
        },
        setUserLogin(state, action: PayloadAction<string>) {
            state.userInfos.userLogin = action.payload;
        },
        setUserLevel(state, action: PayloadAction<string>) {
            state.userInfos.userLevel = action.payload;
        },
        setUserCoalition(state, action: PayloadAction<string>) {
            state.userInfos.userCoalition = action.payload;
        },
        setUserImage(state, action: PayloadAction<string>) {
            state.userInfos.userImage = action.payload;
        },
        setUserAccessToken(state, action: PayloadAction<string>) {
            state.userTokenData.accessToken = action.payload;
        },
        setUserRefreshToken(state, action: PayloadAction<string>) {
            state.userTokenData.refreshToken = action.payload;
        },
        setUserAccessTokenCreatedAt(state, action: PayloadAction<string>) {
            state.userTokenData.accessTokenCreatedAt = action.payload;
        },
        setUserAccessTokenExpiresIn(state, action: PayloadAction<string>) {
            state.userTokenData.accessTokenExpiresIn = action.payload;
        },
        setTokenData(state, action: PayloadAction<UserTokenData>) {
            state.userTokenData = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    setUserLogged,
    setUserAccessToken,
    setUserRefreshToken,
    setUserAccessTokenCreatedAt,
    setUserAccessTokenExpiresIn,
    setTokenData,
    setUserInfos,
    setUserImage,
    setUserLogin,
    setUserLevel,
    setUserCoalition,
} = userSlice.actions;

export default userSlice.reducer;
