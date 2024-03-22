import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { apiGetAllPosts } from '../../services/post';
import { I_Post } from '../../intefaces/post';

interface Props {
    posts: I_Post[] | []
    msg: string | ""
}

const initialState: Props = {
    posts: [],
    msg: ""
}

export const getPosts = createAsyncThunk("posts/getAll",
    async (_, { dispatch }) => {
        try {
            const res: any = await apiGetAllPosts()
            console.log("🐼🐸 ~ res🚀", res)
            if (res.data.err === 0) {
                dispatch(setPosts({
                    post: res.data.response,
                    msg: res.data.msg
                }))
            } else {
                dispatch(setPosts({
                    post: [],
                    msg: res.data.msg
                }))
            }
        } catch (error) {
            throw error

        }
    })

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setPosts: (state, { payload }) => {
            state.posts = payload.post
            state.msg = payload.msg
        }
    }
});

export const { setPosts } = postSlice.actions

export default postSlice.reducer