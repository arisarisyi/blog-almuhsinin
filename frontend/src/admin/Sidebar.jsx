import React from "react"
import "./style.css"
import axios from "axios"
import { FaPlus, FaArrowRight } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const Sidebar = () => {
  const history = useNavigate()
  const Logout = async () => {
    try {
      await axios.delete("http://localhost:5000/logout")
      history("/login")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="sidebarLogin">
      <div className="sideItem">
        <ul>
          <li>
            <a href="/dashboard/post">
              <FaPlus className="space" />
              Post
            </a>
          </li>
          <li>
            <a href="/dashboard/adduser">
              <FaPlus className="space" />
              User
            </a>
          </li>
          <li onClick={Logout}>
            <FaArrowRight className="space" />
            Logout
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
