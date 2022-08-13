import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import "./style.css"

export default function AddUser() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confPassword, setConfPassword] = useState("")
  const [msg, setMsg] = useState("")
  const history = useNavigate()

  const AddUser = async (e) => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:5000/users", {
        username: username,
        email: email,
        password: password,
        confPassword: confPassword,
      })
      history("/dashboard")
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg)
      }
    }
  }

  return (
    <div className="item" id="/adduser">
      <span className="loginTitle">Add User</span>
      <form onSubmit={AddUser} className="loginForm">
        <p>{msg}</p>
        <label>Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          className="loginInput"
          value={confPassword}
          onChange={(e) => setConfPassword(e.target.value)}
        />
        <button className="loginButton">Register</button>
      </form>
    </div>
  )
}
