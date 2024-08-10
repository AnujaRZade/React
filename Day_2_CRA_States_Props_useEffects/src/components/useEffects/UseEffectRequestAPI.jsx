import { useEffect, useState } from "react";

const UseEffectRequestAPI = () => {

    const [data, setData] = useState(null);

    const fetchUser = async () => {
        const res = await fetch('http://jsonplaceholder.typicode.com/users/1')
        const userData = await res.json();       
        console.log("userData");
        setData(userData);
    }
    console.log("start here");
    
    useEffect(()=>{
        console.log("useEffect")
        fetchUser();
    },[]);

    console.log("Rendering component with data:");

    return (
        <>
            <div>
             
                {
                    !data ? (<h2>Loading..................</h2>) :
                        (
                            <>
                                <h1>Making API requests</h1>
                                <h2>Name:{data.name} </h2>
                                <h2>Email: {data.email}</h2>
                                <h2>UserName: {data.username}</h2>
                            </>
                        )
                }

            </div>
        </>
    )
}
export default UseEffectRequestAPI;