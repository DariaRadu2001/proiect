import { useEffect, useState } from "react";
import httpClient from "./httpClient";

const useFetchData = <T>(url: string) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<T>();

    useEffect(() => {
        const fetch = async () => {
            setIsLoading(true)
            try {
                const { data } = await httpClient.get(`${url}`);
                setData(data)
            }
            finally {
                setIsLoading(false)
            }   
        }
        fetch()
    }, [])

    return { isLoading, data }
}

export default useFetchData;