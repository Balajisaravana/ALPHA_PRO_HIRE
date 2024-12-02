import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter, Routes, Route } from "react-router";
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path='/about' element={<About />}></Route>
        {/* <Route exact path='/courses' element={<CourseHome />} /> */}
        {/* <Route exact path='/team' element={<Team />} /> */}
        <Route exact path='/faq' element={<Pricing />} />
        <Route exact path='/journal' element={<Blog />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App
