import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : "https://damidevshop.herokuapp.com/api"
})