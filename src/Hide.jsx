import React, { useState } from "react";

function Hide() {

    const [hide, setHide] = useState(false)
  return <div>
        {hide==true && <h1>Seeeing</h1> }
        <button onClick={()=>(setHide(!hide))}>both</button>
        <button onClick={()=>(setHide(true))}>show</button>
        <button onClick={()=>(setHide(false))}>hide</button>
  </div>;
}

export default Hide;
