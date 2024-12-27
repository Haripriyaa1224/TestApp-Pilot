import React, { useState } from 'react'
import SignIn from '../components/SignIn'
import Register from '../components/Register'

const Home = () => {
    const [login, setLogin] = useState(true)    
  return (
    <>

    { login ? <SignIn /> : <Register /> }
    
    </>
  )
}

export default Home