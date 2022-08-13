import Sidebar from "./Sidebar"
import React, { useState, useEffect } from "react"
import axios from "axios"
import jwt_decode from "jwt-decode"
import { useNavigate } from "react-router-dom"

const Dashboard = () => {
  const [token, setToken] = useState("")
  const history = useNavigate()
  useEffect(() => {
    refreshToken()
  }, [])
  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token")
      setToken(response.data.accessToken)
      const decoded = await jwt_decode(response.data.accessToken)
    } catch (error) {
      if (error.response) {
        history("/login")
      }
    }
  }
  return (
    <div>
      <Sidebar />
    </div>
  )
}

export default Dashboard
