import "./style.css"
import React, { useState, useEffect } from "react"
import axios from "axios"
import jwt_decode from "jwt-decode"
import Table from "react-bootstrap/Table"

const Welcome = () => {
  const [name, setName] = useState("")
  const [token, setToken] = useState("")
  const [exp, setExp] = useState("")
  const [users, setUsers] = useState([])

  useEffect(() => {
    refreshToken()
    getUsers()
  }, [])
  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token")
      setToken(response.data.accessToken)
      const decoded = await jwt_decode(response.data.accessToken)
      setName(decoded.username)
      setExp(decoded.exp)
    } catch (error) {
      if (error.response) {
        console.log(error.response)
      }
    }
  }

  const axiosJWT = axios.create()

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date()
      if (exp * 1000 < currentDate.getTime()) {
        const response = await axios.get("http://localhost:5000/token")
        config.headers.Authorization = `Bearer ${response.data.accessToken}`
        setToken(response.data.accessToken)
        const decoded = jwt_decode(response.data.accessToken)
        setName(decoded.name)
        setExp(decoded.exp)
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  const getUsers = async () => {
    const response = await axiosJWT.get("http://localhost:5000/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    setUsers(response.data)
  }

  return (
    <div className="item">
      <h1 className="text-center">Welcome to Dashboard {name}</h1>
      <h4>User List:</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Welcome
