import React from 'react'
import logo from '../images/logo.jpg'

function User() {


  return (
    <div className='User'>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="info">
        <p>Anastasia K</p>
        <a href={'url'}>Logout!</a>
      </div>
    </div>

  )
}

export default User