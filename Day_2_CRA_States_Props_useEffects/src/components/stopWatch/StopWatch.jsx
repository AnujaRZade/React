import { useState, useRef, useEffect } from "react";

function StopWatch() {
    const [time, setTime] = useState(0)
    
    //useRef():it is used to preserve/persist the data across multiple re-rendering
    //return mutable obj which will persist throuout the component re-rendering with its ref
    const timerId=useRef(null);  //timerId will be refrence
    
    useEffect(()=>{    //once the component re-renders we must clearinterval else it may cause memory leak
        return ()=>{
            clearInterval(timerId.current);
        }
    }, []) 
    const startHandler = () => {
        console.log("start")
        console.log(timerId, timerId.current);
         timerId.current= setInterval(() => {
            //1. setTime(time+1) -will not work
            //2.when u want to update next state then u need to use prev state value
            //use callback based syntax of setTime() set methods
            // setTime((prevTime) => {
            //     return prevTime + 1;
            // })
            //OR 
            setTime(prevTime => prevTime+1)            
        }, 1000);
    }

    const pauseHanlder = () => {
        console.log("paused at",time);
        clearInterval(timerId.current); 
    }

    const resetHandler = () => {
        console.log("reset");
        setTime(0);
    }

    return (
        <>
            <h1>StopWatch</h1>
            <h3>{time}</h3>
            <button onClick={startHandler}>Start</button>
            <button onClick={pauseHanlder}>Pasuse</button>
            <button onClick={resetHandler}>reset</button>
        </>
    );
}
export default StopWatch;