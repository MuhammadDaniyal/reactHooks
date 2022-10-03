import React, { useState, useEffect } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0);

    const countUpdate = (val) => {
        if (val === "inc") return setCount(count + 1);
        if (val === "dec") return setCount(count - 1);
    };

    // By Defult first time render and any time if any dependency value changes 
    useEffect(() => {
      document.title = count
    },[count]) // safest way to useEffect bcz agr koe or usestate bnaya to agr usma update hue chez to comp render hoga to useEffect chl jaeg adubara to woh nh hona chyee jb iska kaam change ho to jbhi chle useEffect
    
    return (
        <>
            <div className="container">
                <button onClick={() => countUpdate("inc")}>
                Add
                </button>
                <h1>{count}</h1>
                <button onClick={() => countUpdate("dec")}>
                Subs
                </button>
            </div>
        </>
    )
}

export default UseEffect