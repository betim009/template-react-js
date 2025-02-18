import { useState, useEffect } from "react";
import { fetchAll } from "../services/fetchApi";

export default function useFetch(initialValue = []) {
    const [data, setData] = useState(initialValue);

    useEffect(() => {
        const contentLoad = async () => {
            const url = "https://jsonplaceholder.typicode.com/users"
            const result = await fetchAll(url);
            setData(result)
        };


        contentLoad();
    }, [])

    return {
        data
    };
}
