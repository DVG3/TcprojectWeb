import React from 'react'
import './Signin.css'
import Inputfield from '../components/Inputfield'
import googleicon from '../images/googleIcon.png'
import {Link} from 'react-router-dom'


function Signin() {
  function loginhandle(e)
  {
    console.log("Ok")
    alert('Chx code đâu=))')
  }
  return (
    <div className="pagebody">
        <div className="signin-container">
            Đăng nhập
            <div className="loginfield">
                <Inputfield name="Tên team"/>
                <Inputfield name="Mật khẩu" type="password"/>
                <div className="loginchoices" >
                    <button className="loginbutton" onClick={loginhandle}>
                        Đăng nhập
                    </button>
                    <Link to="/register" className="registerdirect">Đăng ký</Link>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Signin