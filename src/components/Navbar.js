import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <>
        <nav className="navbar">
            <div className="navbar-container" >
                <div className="navbar-logo">
                  TCProject
                </div>
                <ul className="navbar-links">
                  <li><Link to="/">Trang chủ</Link></li>
                  <li><Link to="/member">Đội chơi</Link></li>
                  <li><Link to="/info">Thông tin</Link></li>
                  <li><Link to="/tutorial">Hướng dẫn</Link></li>
                  <li><Link className="primary" to="signin">Đăng nhập</Link></li>
                </ul>
            </div>
        </nav>   
    </>
  )
}

export default Navbar   