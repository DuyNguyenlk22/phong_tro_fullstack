import axiosConfig from "./axiosConfig"
import { I_register } from '../intefaces/register';

export const apiRegister = (data: I_register | undefined) =>
    new Promise(async (resolve, reject) => {
        try {
            const res = await axiosConfig.post("/api/v1/auth/register", data)
            resolve(res)
        } catch (error) {
            reject(error)
        }
    })

export const apiLogin = (data: I_register | undefined) =>
    new Promise(async (resolve, reject) => {
        try {
            const res = await axiosConfig.post("/api/v1/auth/login", data)
            resolve(res)
        } catch (error) {
            reject(error)
        }
    })