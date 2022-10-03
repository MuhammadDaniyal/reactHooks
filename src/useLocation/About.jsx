import React from 'react'
import { useLocation } from 'react-router-dom'

const About = () => {
    const currLocation = useLocation()
    return (
        <div className='container'>
            <h1>Hello {currLocation.pathname.replace('/', '')} page</h1>
            {
                currLocation.pathname === '/about/daniyal' ?
                    <p>Login to see Daniyal files</p> :
                    <p>Login to see your files</p>
            }
        </div>
    )
}

export default About