import React, { useEffect, useState } from 'react'
import { useLayoutEffect } from 'react';

// useLayoutEffect, runs synchronously after a render but before
// the screen is updated.

// useEffect runs asynchronously and after a render is painted to the screen


const LayoutEffect = () => {

    const [num, setNum] = useState(0)

    // slowmotion ma pehly result 0 ata page py phir random number generate hota
    // page render hona ka bad value(data) change hoti hy useEffect ma

    // useEffect(()=>{
    //     if ( num === 0 ) setNum(Math.random() * 100)
    // },[num])

    // screen update hona sy pehla hi data update hojata hy - background ma data change hojata hy - page refresh nh hota 
    useLayoutEffect(()=>{
        if ( num === 0 ) setNum(Math.random() * 100)
    },[num])

    useEffect(()=>{
        console.log('third useEffect');
    },[])

  return (
    <>
        <div className="container">
    <p>
        My Generated random number {num} 
    </p>
    <button onClick={()=> setNum(0)}>
        Generate Random Number
    </button>
        </div>
    </>
  )
}

export default LayoutEffect