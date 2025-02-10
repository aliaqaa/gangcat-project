import React from 'react'
import Logo from '../Logo/Logo'
import LoginBotton from '../LoginBotton/LoginBotton'

function AuthHeader() {
  return (
    <div className='container text-asd text-black primaryOrange m-auto flex justify-between'>
      <LoginBotton/>
      <Logo className="h-20"/>
      
    </div>
  )
}

export default AuthHeader