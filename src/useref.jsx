import React,{useState,useRef} from 'react';

function UseRef(){
    let[Count, setCount]=useState(0);
    let countRef=useRef(0);

    let increment=()=>{
        setCount(Count+1);
        countRef.current++;

        console.log("state value:",Count);
        console.log("Ref:",countRef.current);

    }

    return( 
        <div>
            <h1>Count: {Count}</h1>
            <button onClick={increment}>++++</button>
        </div>
    )
}
export default UseRef;