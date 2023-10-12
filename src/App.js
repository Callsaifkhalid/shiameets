import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Blog from "./screens/Blog";
import ContactUs from "./screens/Contact-us";
import BlogSecond from "./screens/Blog-second";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blogsecond" element={<BlogSecond />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
