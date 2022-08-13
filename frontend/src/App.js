import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./home/Home";
import Blog from "./blog/Blog";
import Login from "./admin/Login";
import Single from "./blog/Single";
import Dashboard from "./admin/Dashboard";
import Welcome from "./admin/Welcome";
import AddUser from "./admin/AddUser";
import PostList from "./admin/PostList";
import AddPost from "./admin/AddPost";
import EditPost from "./admin/EditPost";

function App() {

  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route
            path="/blog"
            element={<Blog />
            }
          />
          <Route
            path="/"
            element={<Home />
            }
          />
          <Route
            path="/login"
            element={<Login />
            }
          />
          <Route
            path="/post/:postId"
            element={<Single />
            }
          />
          <Route
            path="/dashboard"
            element={
              <div className="d-flex">
                <Dashboard />
                <Welcome />
              </div>

            }
          />
          <Route
            path="/dashboard/adduser"
            element={

              <div className="d-flex">
                <Dashboard />
                <AddUser />
              </div>
            }
          />
          <Route
            path="/dashboard/post"
            element={

              <div className="d-flex">
                <Dashboard />
                <PostList />
              </div>
            }
          />
          <Route
            path="/dashboard/post/add"
            element={

              <div className="d-flex">
                <Dashboard />
                <AddPost />
              </div>
            }
          />
          <Route
            path="/dashboard/post/edit/:postId"
            element={<div className="d-flex">
              <Dashboard />
              <EditPost />
            </div>
            }
          />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
