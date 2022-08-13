import React from "react"
import Post from "../components/Post"
import Sidebar from "../components/Sidebar"

const Blog = () => {
  return (
    <div>
      <div className="d-flex">
        <Post />
        <Sidebar />
      </div>
    </div>
  )
}

export default Blog
