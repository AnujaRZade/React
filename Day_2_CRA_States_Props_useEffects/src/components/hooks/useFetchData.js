/*customhook: 
    - should be a pure JS function and should not return any JSX Element
    - it should always start with use keyword

    */
import { useEffect, useState } from 'react';

export const useFetchData = (pageNum) => {
    const [data, setData] = useState([]);

    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const loadDataHandler = async () => {
        try {
            setIsLoading(true);
            const res = await fetch('https://jsonplaceholder.typicode.com/comments?' +
                new URLSearchParams({ _page: pageNum, _limit: 10 })
            );
            const userData = await res.json();
            console.log(userData);
            setData([...data, ...userData]); //append next 10 data //append next 10 data
        } catch (error) {
            console.log(error.msg);
            setError(error.message);

        } finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        loadDataHandler();
    }, [pageNum]);

    return {
        data,
        error,
        isLoading
    }
}