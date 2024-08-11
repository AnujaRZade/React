// import './infiniteScroll.css'

import { useState } from 'react';
import styleObj from './style.module.css' //evry style will be object
import {useFetchData} from '../hooks/useFetchData';

const InfiniteScroll = () => {
    // const [data, setData] = useState([]);
    // const [error, setError] = useState('');
    // const [isLoading, setIsLoading] = useState(false);

    // const loadDataHandler = async () => {
    //     try {
    //         setIsLoading(true);
    //         const res = await fetch('https://jsonplaceholder.typicode.com/comments?' +
    //             new URLSearchParams({ _page: pageNum, _limit: 10 })
    //         );
    //         const userData = await res.json();
    //         console.log(userData);
    //         setData([...data, ...userData]); //append next 10 data
    //     } catch (error) {
    //         console.log(error.msg);
    //         setError(error.message);

    //     } finally {
    //         setIsLoading(false);
    //     }
    // }
    // useEffect(() => {
    //     loadDataHandler();
    // }, [pageNum]);
    const [pageNum, setPageNum] = useState(1);
    const { data, error, isLoading } = useFetchData(pageNum);


    return (
        <>
            <div className={styleObj.container}>
                <h1 className={styleObj.heading}>Machine coding problem: Infinite Scrolling/Lazy loading </h1>


                {
                    isLoading && (<div>Loading......</div>)
                }

                {
                    error && (<div>{error.message}</div>)
                }

                {

                    data && data.map((item) => {
                        return <div className={styleObj.body_text} key={item.id}>{item.body}</div>
                    })
                }
                <div>{pageNum}</div>
                <button onClick={() => setPageNum(pageNum + 1)}> Next </button>
            </div>
        </>
    )
}
export default InfiniteScroll;