import Home from "./components/Home";
import {Routes,Route} from "react-router-dom"
import Login from "./pages/login.jsx";
import Register from "./pages/RegisterPage";
import PostBlog from "./pages/post-blog"
import ViewPost from "./pages/view-post";
import { store } from './store'
import { Provider } from 'react-redux'
import AddPost from "./pages/post-blog.jsx";
export default function App() {

  return (
  <Provider store={store}>
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/RegisterPage" element={<Register/>}/>
    <Route path="/post-blog" element={<PostBlog/>}/>
    <Route path="/view-post" element={<ViewPost/>}/>
    <Route path="/add-post" element={<AddPost/>}/>
  </Routes>
  </Provider>
  )
}
