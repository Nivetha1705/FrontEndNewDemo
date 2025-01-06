import React from "react";
import { useParams } from "react-router-dom";

function Func(){
  const { id } = useParams();

  return (
    <div>
      <h2>College Details</h2>
      <p>This is the details for ID: {id}</p>
    </div>
  );
};

export default Func;
