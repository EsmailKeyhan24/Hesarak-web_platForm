import { Routes , Route } from "react-router-dom"
import Header  from "./components/header";
import Home from "./pages/home"
import About  from "./pages/about";
import Contact from "./pages/contact";
import Tickets from './pages/tickets'
import Blog from "./pages/blog";
// import Footer from "./components/footer";
export default function App(){
  return(
    <main>
      <Header />
      {/* <Footer /> */}
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/tickets" element={<Tickets />}></Route>
            <Route path="/blog" element={<Blog />} />
        </Routes>
    </main>
  )
}