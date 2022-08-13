import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import "./style.css"

const AddPost = () => {
  const [file, setFile] = useState("")
  const [preview, setPreview] = useState("")
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [author, setAuthor] = useState("")
  const navigate = useNavigate()

  const loadImage = (e) => {
    const image = e.target.files[0]
    setFile(image)
    setPreview(URL.createObjectURL(image))
  }

  const savePost = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("file", file)
    formData.append("title", title)
    formData.append("desc", desc)
    formData.append("author", author)
    try {
      await axios.post("http://localhost:5000/post", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      })
      navigate("/dashboard")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="addPost">
      {preview ? (
        <figure className="container d-flex justify-content-center mt-4">
          <img src={preview} alt="Preview Image" width="128px" height="128px" />
        </figure>
      ) : (
        ""
      )}
      <div className="write">
        <form className="writeForm" onSubmit={savePost}>
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className="writeIcon fas fa-plus"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={loadImage}
            />
            <input
              type="text"
              placeholder="Title"
              className="writeInput"
              autoFocus={true}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="writeFormGroup">
            <input
              type="text"
              placeholder="Author"
              className="writeInput"
              autoFocus={true}
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="writeFormGroup border">
            <textarea
              placeholder="Tell your story..."
              type="text"
              className="writeInput writeText"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>

          <button className="writeSubmit" type="submit">
            Publish
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddPost
