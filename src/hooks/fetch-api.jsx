import { useState, useEffect } from "react";
import axios from "axios";

const useAPi = (url) => {
    const [data, setData]  = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const result = await axios.get(url);
                setData(result.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return {data, loading, error};
};

export default useAPi;