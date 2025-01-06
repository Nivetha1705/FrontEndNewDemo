import React,{useState}  from 'react';
import {useEffect} from 'react';
function UseEffect(){
    let[count,setCount]=useState(0);

    useEffect(()=>{
        console.log("Value Updated");
    },[count])
    return(
       <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count+1)}>Increment</button>
        <button onClick={() => setCount(count-1)}>Decrement</button>
       </div>
    );
}
export default UseEffect;