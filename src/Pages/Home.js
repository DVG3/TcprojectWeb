import React from 'react'
import {Link} from 'react-router-dom'

import './Home.css'
import '../fonts/Mechsuit.otf'


function Home() {
  return (
    <>
        <div className="body-container">
          <div className="title">
          The<span> Cybot </span>Project
          </div>
          <div className="subtitle">
            A robot competition
          </div>
          <div className="interact">
            <Link to="signin" className="joinbutton">
              JOIN
            </Link>
          </div>
        </div>
    </>
  )
}

export default Home