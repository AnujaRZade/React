/**
 * Infinite scrolling:
 *  -create the ref for the last element in .map
 *  -use intersection observer
 *  - when the last ele will come in viewport load the next set of 10 data elems
 */

import { useRef, useState } from 'react';
import styleObj from './style.module.css' //evry style will be object
import { useFetchData } from '../hooks/useFetchData';

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
    const observer = useRef(null);

    const getLastEleRef = (elem) => {
        console.log("getLastRef", elem);
        if (!elem || isLoading) return;
        //else start observering
        if (observer.current)  //to avoid memory leak problem, if it persist disconnect it then u may again create it
            observer.current.disconnect();

            //create observer refrence
        observer.current = new IntersectionObserver((entries) => {  //entries is arrray although here its size is 1
            console.log("entries ", entries);
            // const [entry]= entries; //entry=entries[0]
            // console.log("entry", entry);     
            // if(entry.isIntersecting)   OR

            if (entries[0].isIntersecting)
                setPageNum(prev => prev + 1);
        });
        observer.current.observe(elem);



    }
    return (
        <>
            <div className={styleObj.container}>
                <h1 className={styleObj.heading}>Machine coding problem: Infinite Scrolling/Lazy loading </h1>

                {
                    error && (<div>{error.message}</div>)
                }

                {
                    data && data.map((item, index) => {
                        if (data.length === index + 1) { //index of 10th ele= 9, +1 =10{
                            //attach ref to last ele
                            return <div ref={(elem) => { getLastEleRef(elem) }} className={styleObj.body_text} key={item.id}>{item.body}</div>
                        } else {
                            return <div className={styleObj.body_text} key={item.id}>{item.body}</div>
                        }
                    })

                    // data && data.map((item) => {
                    //             return <div className={styleObj.body_text} key={item.id}>{item.body}</div>
                    //         })
                    // }
                }
                {
                    isLoading && (<div className={styleObj.loader}>Loading......</div>)
                }
                <div>{pageNum}</div>
                {/* <button onClick={() => setPageNum(pageNum + 1)}> Next </button> */}
            </div>
        </>
    )
}
export default InfiniteScroll;