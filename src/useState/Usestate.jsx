import React, { useState } from "react";
// import { BiPlusMedical } from "react-icons/bi";
// import { FaMinus } from "react-icons/fa";
//  <BiPlusMedical className="icon" /> 
//  <FaMinus className="icon minus_icon" /> 

const Usestate = () => {
    const [count, setCount] = useState(0)
    return (
        <>
            <div className="container">
                <button onClick={() => setCount(count + 2)}>
                add</button>
                <h1>{count}</h1>
                <button
                    onClick={() => (count === 0 ? setCount(0) : setCount(count - 2))}>
                subs</button>
            </div>
        </>
    )
}

export default Usestate