import React, { useState , useRef } from 'react';

function Example() { 
    const [count, setCount] = useState(0);
    const [Name, setName] = useState("nivetha");
    let countRef = useRef(0);


    let increment = ()=>{
        setCount(count+1);
        countRef.current++;

        console.log("state: ",count);
        console.log("Ref: ",countRef.current);

    }
    let  handleNameChange = (e) => {setName(e.target.value)
    console.log("Name in inmput",e.target.value)
    }

        // let decrement = ()=>{
        //     setCount(count-1);
        //     countRef.current--;
    
        //     console.log("state: ",count);
        //     console.log("Ref: ",countRef.current);
    
        //     }
    
    return (
        <div>
            <h1>count: {countRef.current}</h1>
            {/* <h1>count: {count}</h1> */}
            <button onClick={increment}>+++</button>
            {/* <button onClick={decrement}>- -</button> */}
            <input type="text" value={Name} onChange={handleNameChange}/>
            <h1>Name:{Name}</h1>
        </div>
    );
}

export default Example;