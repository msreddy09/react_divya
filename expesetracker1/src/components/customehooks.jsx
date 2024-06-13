import React, { useEffect, useState } from "react";

const useFetchData = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const res = await fetch(url);
                const d = await res.json();
                setData(d);
            } catch (err) {
                setError(err);
            }

        }

        fetchData();

    }, [url])

    return { data, error }

}

export default useFetchData;
