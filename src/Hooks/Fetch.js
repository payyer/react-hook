import { useEffect, useState } from "react";
import axios from "axios";
const useFecth = (url) => {
    const [iserror, setIsError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setData(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err)
                setIsError(true)
                alert(err.message)
            })
    }, [url])
    return {
        data, loading, iserror
    }
}

export default useFecth;