import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserState = {
    logged: boolean;
    userCode: string | undefined;
};

const initialState: UserState = {
    logged: false,
    userCode: undefined,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserLogged(state, action: PayloadAction<boolean>) {
            state.logged = action.payload;
        },
        setUserCode(state, action: PayloadAction<string>) {
            state.userCode = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setUserLogged, setUserCode } = userSlice.actions;

export default userSlice.reducer;
