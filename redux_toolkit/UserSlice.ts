import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserTokenData = {
    accessToken: string | undefined;
    accessTokenCreatedAt: string | undefined;
    accessTokenExpiresIn: string | undefined;
    refreshToken: string | undefined;
};

export type UserState = {
    logged: boolean;
    userTokenData: UserTokenData;
};

const initialState: UserState = {
    logged: false,
    userTokenData: {
        accessToken: undefined,
        accessTokenCreatedAt: undefined,
        accessTokenExpiresIn: undefined,
        refreshToken: undefined,
    },
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserLogged(state, action: PayloadAction<boolean>) {
            state.logged = action.payload;
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
} = userSlice.actions;

export default userSlice.reducer;
