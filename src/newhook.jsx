import { useEffect, useState, useMemo } from "react";

function New(){
    let [Number,setNumber]=useState(0);
    let [dark,setDark]=useState(false);

    let doubleNum = useMemo(()=>{
        return slowFunction(Number);
    },[Number])

    let themestyle = useMemo(()=>{
        return{
            backgroundColour: dark?'black':'white',
            color:dark?'white':'black'
        }
    },[dark])

    useEffect(()=>{
        console.log("Theme Changed");
    },[themestyle])

    return(
        <div>
            <input type="number" value={Number} onChange={(e)=>setNumber(e.target.value)}></input>
            <button onClick={()=>setDark((val)=>!val)}>Change Theme</button>
            <div style={themestyle}>{doubleNum}</div>

        </div>
    )
}
function slowFunction(num){
    for (let i=0;i<1000000000;i++){}
    return num*2;

}
export default New;