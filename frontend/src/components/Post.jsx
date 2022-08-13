import React, { useState, useEffect } from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import axios from "axios"
import { Link } from "react-router-dom"
import ReactPaginate from "react-paginate"
import "./style.css"

const Post = () => {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(0)
  const [limit, setLimit] = useState(10)
  const [pages, setPages] = useState(0)
  const [rows, setRows] = useState(0)
  const [keyword, setKeyword] = useState("")
  const [query, setQuery] = useState("")
  const [msg, setMsg] = useState("")

  useEffect(() => {
    getPosts()
  }, [page, keyword])

  const getPosts = async () => {
    const response = await axios.get(
      `http://localhost:5000/post?search_query=${keyword}&page=${page}&limit=${limit}`
    )
    setPosts(response.data.result)
    setPage(response.data.page)
    setPages(response.data.totalPage)
    setRows(response.data.totalRows)
  }
  const changePage = ({ selected }) => {
    setPage(selected)
    if (selected === 9) {
      setMsg(
        "Jika tidak menemukan data yang Anda cari, silahkan cari data dengan kata kunci spesifik!"
      )
    } else {
      setMsg("")
    }
  }

  const searchData = (e) => {
    e.preventDefault()
    setPage(0)
    setMsg("")
    setKeyword(query)
  }

  return (
    <div className="post mt-4">
      <div className="container d-flex justify-content-center">
        <form onSubmit={searchData}>
          <div className="field has-addons">
            <div className="control is-expanded">
              <input
                type="text"
                className="input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Find something here..."
              />
              <button type="submit" className="button">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      {posts.map((post) => (
        <div className="row" key={post.id}>
          <div className="col">
            <Card className="card mt-4" style={{ width: "18rem" }}>
              <Card.Img className="postImg" variant="top" src={post.url} />
              <Card.Body>
                <Link to={`/post/${post.slug}`}>
                  <Card.Title>{post.title}</Card.Title>
                </Link>
                <Card.Subtitle className="mb-2 text-muted">
                  {post.author}
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  {post.cat}
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  {new Date(post.createdAt).toDateString()}
                </Card.Subtitle>
                <Card.Text className="postDesc">{post.desc}</Card.Text>
                <Link to={`/post/${post.slug}`}>
                  <Button variant="primary">Baca Selengkapnya</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      ))}
      <p className="d-flex container justify-content-center">{msg}</p>
      <div className="page d-flex container justify-content-center">
        <nav aria-label="Page navigation example" key={rows}>
          <ul>
            <ReactPaginate
              previousLabel={"< Prev"}
              nextLabel={"Next >"}
              pageCount={Math.min(10, pages)}
              onPageChange={changePage}
              className="pagination"
            />
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Post
