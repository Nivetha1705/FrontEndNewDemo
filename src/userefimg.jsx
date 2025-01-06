import React, {useRef } from 'react';

function Img() {
    let image=useRef(0);
    function display(){
        image.current.src="https://media.istockphoto.com/id/1397018356/photo/3d-render-colorful-background-with-abstract-shape-glowing-in-ultraviolet-spectrum-curvy-neon.jpg?s=612x612&w=0&k=20&c=mYV38sVmTnLyL4gRnPCcTACPFhqCZH6EvTMe8IxSVis="
    
    }
    return(
        <div>
        <button onClick={display}>TAP HERE!!</button>
        <img ref={image}/>
        </div>
    )
    }
    export default Img;