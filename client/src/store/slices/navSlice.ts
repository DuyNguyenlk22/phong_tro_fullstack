import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { I_categories } from '../../intefaces/categories';
import { apiGetCategories } from '../../services/category';
import { apiGetAcreages, apiGetPrices } from '../../services/app';

interface Props {
    msg: string,
    categories: I_categories[] | [],
    prices: I_price[] | [],
    acreages: I_price[] | []
}
const initialState: Props = {
    msg: "",
    categories: [],
    prices: [],
    acreages: []
}
type Payload<T> = { response: T[], msg: string };

export const getCategories = createAsyncThunk("categories/getAll",
    async (_, { dispatch }) => {
        try {
            const res: any = await apiGetCategories()
            if (res.data.err === 0) {
                dispatch(setCategories(res.data))
            }
        } catch (error) {
            throw error
        }
    }
)
export const getPrices = createAsyncThunk("prices/getAll",
    async (_, { dispatch }) => {
        try {
            const res: any = await apiGetPrices()
            if (res.data.err === 0) {
                dispatch(setPrices(res.data))
            }
        } catch (error) {
            throw error
        }
    }
)
export const getAcreages = createAsyncThunk("acreages/getAll",
    async (_, { dispatch }) => {
        try {
            const res: any = await apiGetAcreages()
            if (res.data.err === 0) {
                dispatch(setAcreages(res.data))
            }
        } catch (error) {
            throw error
        }
    }
)

const navSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setCategories: (state, { payload }: { payload: Payload<I_categories> }) => {
            state.categories = payload.response;
            state.msg = payload.msg;
        },
        setPrices: (state, { payload }: { payload: Payload<I_price> }) => {
            state.prices = payload.response?.sort((a, b) => a.order - b.order);
            state.msg = payload.msg;
        },
        setAcreages: (state, { payload }: { payload: Payload<I_price> }) => {
            state.acreages = payload.response?.sort((a, b) => a.order - b.order);
            state.msg = payload.msg;
        },
    }
});

export const { setCategories, setPrices, setAcreages } = navSlice.actions

export default navSlice.reducer