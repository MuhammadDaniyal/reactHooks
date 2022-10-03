import React, { useMemo, useState } from 'react'

const UseMemoHook = () => {

    const [myNum, setMyNum] = useState(0)
    const [show, setShow] = useState(false)

    const getValue = () => {
        setMyNum(myNum + 1)
    }

    const counterNumber = (num) => {
        console.log('run');
        for (let i = 0; i <= 100000000; i++) { }
        return num
    }

    const CheckData = useMemo(() => {
        return counterNumber(myNum)
    },[myNum])

    return (
        <>
            <div className="container">
                <button onClick={getValue}>counter</button>
                <p>My New Number {CheckData}</p>
                <button onClick={() => setShow(!show)}>
                    {show ? 'you clicked me' : 'plz click here'}
                </button>
            </div>
        </>
    )
}

export default UseMemoHook