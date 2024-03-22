import axiosConfig from "./axiosConfig"

export const apiGetAllPosts = () =>
    new Promise(async (resolve, reject) => {
        try {
            const res = await axiosConfig.get("/api/v1/posts")
            resolve(res)
        } catch (error) {
            reject(error)
        }
    })