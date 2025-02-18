import axios from "axios"

export const fetchAll = async (url) => {
    try {
        const req = await axios.get(url);
        return req.data;
    } catch (error) {
        return error;
    }
}