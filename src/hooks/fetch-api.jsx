// import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const useAPi = (url) => {
    const {data, isLoading, error}  = useQuery([
        "data", url
    ],
    async () => { 
        const result = await axios.get(url);
        return result.data
    });
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             setLoading(true);
    //             const result = await axios.get(url);
    //             setData(result.data);
    //         } catch (error) {
    //             setError(error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchData();
    // }, [url]);

    return {data, loading: isLoading, error};
};

export default useAPi;