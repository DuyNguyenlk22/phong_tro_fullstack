import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { apiGetAllPosts, apiGetPostsLimit } from '../../services/post';
import { I_Post } from '../../types/post';

interface Props {
    posts: I_Post[] | []
    msg: string | ""
    count: number
}

const initialState: Props = {
    posts: [],
    msg: "",
    count: 0
}

export const getPosts = createAsyncThunk("posts/getAll",
    async (_, { dispatch }) => {
        try {
            const res: any = await apiGetAllPosts()
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
export const getPostsLimit = createAsyncThunk("posts/getLimit",
    async (query: any, { dispatch }) => {
        try {
            const res: any = await apiGetPostsLimit(query)
            if (res.data.err === 0) {
                dispatch(setPosts({
                    post: res.data.response?.rows,
                    count: res.data.response?.count,
                    msg: res.data.msg
                }))
            } else {
                dispatch(setPosts({
                    post: [],
                    count: 0,
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
            let { post, count, msg } = payload
            state.posts = post
            state.count = count
            state.msg = msg
        }
    }
});

export const { setPosts } = postSlice.actions

export default postSlice.reducer