import { useState, useEffect } from "react";
import { fetchPostCount } from "../api"

type Data = {
    count?: number,
    error_ui?: string,
    ok?: boolean,
}
export const useCountClick = (count: number) => {
    const [item, setItem] = useState<Data>({})
    const [isLoading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            const result = fetchPostCount(count)
            setItem(await result);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (count != 0)
        {const timer = setTimeout(() => {
            fetchData()
        }, 1000);
        return () => clearTimeout(timer)};
    }, [count]);


    return { item, isLoading };
};