import React from 'react'
import { useRef } from 'react'
import { useState, useEffect } from 'react'

const RefHookOne = () => {
    const [userInput, setUserInput] = useState('')
    // const [count, setCount] = useState()

    const count = useRef(0)

    useEffect(() => {
        // setCount(count + 1) // state change ona ki wajh sy page render hota bar bar useEffect chlrha
        count.current += 1; // ab jb koe input deta to jb render hota useref ki wajh sy

        // ab jb input hoga kuch jb hi render hoga page wapsi
    })

    return (
        <>
            <div className="container">
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                />
                <p>the number of times comp render:{count.current} </p>
            </div>
        </>
    )
}

export default RefHookOne