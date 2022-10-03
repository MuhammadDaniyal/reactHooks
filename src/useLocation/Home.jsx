import React from 'react'
import { useLocation } from 'react-router-dom'

const Home = () => {
    const currLocation = useLocation()
  return (
    <div className='container'>
        <h1>Hello {currLocation.pathname.replace('/','')} page</h1>
        <p>Login to see your files</p>
    </div>
  )
}

export default Home