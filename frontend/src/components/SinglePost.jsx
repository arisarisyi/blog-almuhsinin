import "./style.css"
import React, { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

export default function SinglePost() {
  const [post, setPost] = useState([])
  const id = useParams()

  useEffect(() => {
    getPost()
  }, [])

  const getPost = async () => {
    const response = await axios.get(`http://localhost:5000/post/${id.postId}`)
    console.log(response)
    setPost(response.data)
  }
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={post.url} alt="" className="singlePostImg container" />
        <h1 className="singlePostTitle">{post.title}</h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            <b>Author: {post.author}</b>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="singlePostDesc">{post.desc}</p>
      </div>
    </div>
  )
}
