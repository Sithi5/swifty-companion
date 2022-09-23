import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserState = {
    logged: boolean;
};

const initialState: UserState = {
    logged: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserLogged(state, action: PayloadAction<boolean>) {
            state.logged = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setUserLogged } = userSlice.actions;

export default userSlice.reducer;
