import React from 'react'
import "../assets/css/Home.css"
import home from "../assets/home.png"
import lock from "../assets/icons/lock.png"

function Home() {
  return (
    <div className='Home'>
      <img src={home} alt="home" />
      <h1>Pocket Notes</h1>
      <p>Send and receive messages without keeping your phone online.<br />Use Pocket Notes on up to 4 linked Devices and 1 mobile phone.</p>
      <div className="HomeBottom">
        <img src={lock} alt="lock" />
        <span>end-to-end encrypted</span>
      </div>
    </div>
  )
}

export default Home