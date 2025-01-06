// import React, { useContext } from 'react';
// import {nameContext} from './app1';

// //function Stomach({name})
//     const stomach =()=>{
    
//     let name=useContext(nameContext);
//       return(
//         <div>
//            <h1>Stomach:{name}</h1>
//         </div>
//       )
//     }
//  export default stomach;
import { useContext } from 'react';
import {nameContext} from './app1.jsx';


function stomach(){
  let {name,click}=useContext(nameContext);
  const reverse={
    backgroundColor:"White",
    textAlign: "center",
    color:"black",
    padding:"0",
    margin:"0"
  }
  const normal={
    backgroundColor:"black",
    textAlign: "center",
    color:"white",
    padding:"0",
    margin:"0"
  }
  return(
    <div style={click?normal:reverse}>
      <h1>Stomach: {name}</h1>
    </div>
  )
}
export default stomach;