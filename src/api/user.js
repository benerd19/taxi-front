import axios from 'axios'

const serverIp = import.meta.env.VITE_SERVER

export async function getUser(id) {
    try {
        const data = await axios.get(`${serverIp}/api/passenger/${id}`)
        return data
    } catch (e) {
        throw new Error(e.response.data)
    }
}

export async function updateUser(id, name, surname, secondName) {
    try {
        const data = await axios.put(`${serverIp}/api/passenger/update`, { id: id, firstName: name, surname: surname, secondName: secondName })
        return data
    } catch (e) {
        throw new Error(e.response.data)
    }
}

export async function deleteUser(id) {
    try {
        const data = await axios.delete(`${serverIp}/api/passenger/delete/${id}`)
        return data
    } catch (e) {
        throw new Error(e.response.data)
    }
}
