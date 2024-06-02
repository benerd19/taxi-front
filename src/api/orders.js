import axios from 'axios'

const serverIp = import.meta.env.VITE_SERVER

export async function createOrder(id, start, end, cost) {
    try {
        const data = await axios.post(`${serverIp}/api/drive/create`, { id: id, start: start, end: end, cost: cost })
        return data
    } catch (e) {
        throw new Error(e.response.data)
    }
}

export async function getCurrenOrder(id) {
    try {
        const data = await axios.get(`${serverIp}/api/drive/current/${id}`)
        return data
    } catch (e) {
        throw new Error(e.response.data)
    }
}

export async function updateCurrenOrder(id, start, end, cost) {
    try {
        const data = await axios.put(`${serverIp}/api/drive/update/info`, { id: id, start: start, end: end, cost: cost })
        return data
    } catch (e) {
        throw new Error(e.response.data)
    }
}

export async function deleteCurrenOrder(id) {
    try {
        const data = await axios.delete(`${serverIp}/api/drive/cancel/${id}`)
        return data
    } catch (e) {
        throw new Error(e.response.data)
    }
}
