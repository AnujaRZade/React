import { useEffect, useState } from "react";

const UseEffectsUseCases=()=>{
    const [count, setCount]=useState(0);

console.log("start of program  ")

const handleIncrement=()=>{
    setCount(count+1);
}
useEffect(()=>{
    //logic of fetching data from the server
    console.log("component mounted");
    return()=>{
        //cleanup activity
        console.log("component unmounted");
    }
},[]);

useEffect(()=>{
    //logic of fetching data from the server
    console.log("component gets updated", count+1);
    // return()=>{
    //     //cleanup activity
    //     console.log("component unmounted");
    // }
    //this return will be executed everytime count changes 
    //so cleanup activities should be written in zero dependencies useEffect


},[count]);

    return(

        <>
        <div className="container">
            
            <p>count: {count} </p>
            <button onClick={handleIncrement}> add </button>
        </div>
        </>
    )
}

export default UseEffectsUseCases;