import axios from 'axios'

const serverIp = import.meta.env.VITE_SERVER

export async function logIn(email, password) {
    try {
        const data = await axios.post(`${serverIp}/api/passenger/logIn`, { email: email, password: password })
        return data
    } catch (e) {
        throw new Error(e.response.data)
    }
}

export async function registration(email, password, name) {
    try {
        const data = await axios.post(`${serverIp}/api/passenger/create`, { email: email, password: password, firstName: name })
        return data
    } catch (e) {
        throw new Error(e.response.data)
    }
}
