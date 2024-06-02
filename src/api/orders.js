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
