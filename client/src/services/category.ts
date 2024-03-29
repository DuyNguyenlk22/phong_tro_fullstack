import axiosConfig from "./axiosConfig"

export const apiGetCategories = () =>
    new Promise(async (resolve, reject) => {
        try {
            const res = await axiosConfig.get("/api/v1/categories/all")
            resolve(res)
        } catch (error) {
            reject(error)
        }
    })