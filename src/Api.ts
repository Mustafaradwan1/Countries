import axios from "axios";
const http = axios.create({
    baseURL: "https://restcountries.com/v2"
})

export const  Api = {
    getAll  : async () => {
        const response = await http.get("/all")
        return response.data
    },
    getFullName  : async (name:string | undefined) => {
        const response = await http.get(`/name/${name}?fullText=true`)
        return response.data
    },
    getCode : async (code:string | undefined) => {
        const response = await http.get(`/alpha?codes=${code}`)
        return response.data
    }
    }


