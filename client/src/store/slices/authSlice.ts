import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { apiLogin, apiRegister } from '../../services/auth'
import { I_register } from '../../intefaces/register'

interface Props {
    isLoggedIn: boolean
    token: string | null
    msg: string,
    isActive: boolean
}

const initialState: Props = {
    isLoggedIn: false,
    token: null,
    msg: "",
    isActive: false
}

export const register = createAsyncThunk("register",
    async (payload: I_register | undefined, { dispatch }) => {
        try {
            const res: any = await apiRegister(payload);
            if (res.data.err === 0) {
                dispatch(setAuthStatus({
                    isLoggedIn: true,
                    token: res.data.token,
                    msg: res.data.msg
                }))
            } else {
                dispatch(setAuthStatus({
                    isLoggedIn: false,
                    token: null,
                    msg: res.data.msg
                }))
            }
        } catch (error) {
            dispatch(setAuthStatus({
                isLoggedIn: false,
                token: null,
                msg: "Error..."
            }))
        }
    })

export const login = createAsyncThunk("login",
    async (payload: I_register | undefined, { dispatch }) => {
        try {
            const res: any = await apiLogin(payload);
            if (res.data.err === 0) {
                dispatch(setAuthStatus({
                    isLoggedIn: true,
                    token: res.data.token,
                    msg: res.data.msg
                }))
            } else {
                dispatch(setAuthStatus({
                    isLoggedIn: false,
                    token: null,
                    msg: res.data.msg
                }))
            }
        } catch (error) {
            dispatch(setAuthStatus({
                isLoggedIn: false,
                token: null,
                msg: "Error..."
            }))
        }
    })

const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        setAuthStatus: (state, { payload }) => {
            const { isLoggedIn, token, msg } = payload
            state.isLoggedIn = isLoggedIn
            state.token = token
            state.msg = msg
            state.isActive = !state.isActive
        },
        setLogOut: (state) => {
            state.isLoggedIn = false
            state.token = null
            state.msg = ""
        }
    }
});

export const { setAuthStatus, setLogOut } = authSlice.actions

export default authSlice.reducer