import "./style.css"
import React, { useRef, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const [msg, setMsg] = useState("")
  const emailRef = useRef()
  const passwordRef = useRef()
  const history = useNavigate()

  const Auth = async (e) => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:5000/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })

      history("/dashboard")
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg)
      }
    }
  }
  return (
    <div className="login" id="/login">
      <span className="loginTitle">Login</span>
      <form onSubmit={Auth} className="loginForm">
        <p className="text-center">{msg}</p>
        <label>Email</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your email..."
          ref={emailRef}
        />
        <label>Password</label>
        <input type="password" className="loginInput" ref={passwordRef} />
        <button className="loginButton">Login</button>
      </form>
    </div>
  )
}
