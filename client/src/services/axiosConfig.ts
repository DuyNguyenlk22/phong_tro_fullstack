import axios from "axios"

const baseURL: string = import.meta.env.VITE_BASE_URL

const instance = axios.create({
    baseURL: baseURL,
    timeout: 1000,
})

instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = localStorage.getItem("persist:auth")
    console.log("🐼🐸 ~ token🚀", token)
    return config;
}, function (error) {
    console.log("🐼🐸 ~ error🚀", error)
    // Do something with request error
    return Promise.reject(error);
});

export default instance