import React from 'react'
import { useState, useEffect } from 'react'

const Clearup = () => {
    const [widthVal, setWidthVal] = useState(window.screen.width)

    const currentScreenVal = () =>{
        setWidthVal(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', currentScreenVal)

        // bcz previous storage valus hen cache ma sy nikaal rhe storage ma sy faida nh hy uska -  cleanup storage
        return (()=>{
            window.removeEventListener('resize', currentScreenVal)  
        })
    })
    
    return (
        <>
            <div className="container">
                <h2>
                    The size of the window is <span> {widthVal} </span>
                </h2>
            </div>
        </>
    )
}

export default Clearup