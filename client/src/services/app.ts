import axiosConfig from "./axiosConfig"

export const apiGetPrices = () =>
    new Promise(async (resolve, reject) => {
        try {
            const res = await axiosConfig.get("/api/v1/price/all")
            resolve(res)
        } catch (error) {
            reject(error)
        }
    })

export const apiGetAcreages = () =>
    new Promise(async (resolve, reject) => {
        try {
            const res = await axiosConfig.get("/api/v1/acreage/all")
            resolve(res)
        } catch (error) {
            reject(error)
        }
    })