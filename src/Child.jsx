import React from 'react'
import { useContext } from 'react'
import { AppContext } from './useContext/UseContext'

const Child = () => {
    const userData = useContext(AppContext)
    const {name , age} = userData
    return (
        <>
            <div className='container'>
                Child = My name is {name} and my age is {age}.
            </div>
        </>
    )
}

export default Child