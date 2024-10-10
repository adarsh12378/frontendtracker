import axios from "axios"

const BASE_URL = import.meta.env.VITE_BASE_URL

export default axios.create({
    baseURL: BASE_URL,
}) 

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
})



//This creates a second axios instance, called axiosPrivate.
// The axiosPrivate instance is similar to the default instance but with additional configurations:
// Headers: It sets a custom Content-Type header to application/json, indicating that the requests will use JSON format.
// withCredentials: This option is set to true, which means axios will include cookies and authentication credentials with the request. This is useful if you need to send or receive cookies (e.g., for user authentication).