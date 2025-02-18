import { useState, useEffect } from "react";
import { fetchAll, fetchNewPost } from "../services/fetchApi";

export default function useFetch(initialValue = []) {
    const [data, setData] = useState(initialValue);
    const [postData, setPostData] = useState({
        title: '',
        body: '',
        userId: 1,
    })

    useEffect(() => {
        const contentLoad = async () => {
            const url = "https://jsonplaceholder.typicode.com/users";
            const result = await fetchAll(url);
            setData(result);
        };


        contentLoad();
    }, []);

    const handleFormChangeSubmit = ({ target }) => {
        const { name, value } = target;
        const result = {
            ...postData,
            [name]: value
        };

        console.log(result);
        setPostData(result);
    };

    const handleSubmit = async () => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        const result = await fetchNewPost(url, postData);
        console.log(result);
        return result;
    };


    return {
        data,
        handleFormChangeSubmit,
        handleSubmit
    };
}
