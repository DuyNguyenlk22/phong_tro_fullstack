import { createSlice } from '@reduxjs/toolkit'

interface Props {
    isLoggedIn: boolean
    token: string | null
}

const initialState: Props = {
    isLoggedIn: false,
    token: null
}

const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {}
});

export const { } = authSlice.actions

export default authSlice.reducer