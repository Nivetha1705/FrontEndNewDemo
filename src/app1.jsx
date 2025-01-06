import { createContext,useState } from 'react';
export let nameContext = createContext();

import Hen from './Hen'         
 function App(){
  let [click,setClick]=useState("false")
  return(
    <nameContext.Provider value={{Water: "Water",click}}>

        <Hen/>
        <button onClick={()=>setClick(!click)}>Click Here !</button>
    </nameContext.Provider>
    
  )
 }
 export default App;
     