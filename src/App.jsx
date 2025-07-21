import { Routes , Route } from "react-router-dom"
import { useLocation } from 'react-router-dom';
import Header  from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home"
import About  from "./pages/about";
import Contact from "./pages/contact";
import Tickets from './pages/tickets'
import Blog from "./pages/blog";
import Login from "./pages/login";
import Regester from "./pages/regester";
import { AutoProvider } from "./AutoConext";
export default function App(){
  const location = useLocation();
  const hideFooterOnRoutes = ['/login', '/register'];
  return(
    
    <main>
      <Header />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/tickets" element={<Tickets />}></Route>
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<AutoProvider><Login /></AutoProvider>} />
            <Route path="/register" element={<Regester />} />
        </Routes>
         {/* فوتر فقط زمانی نمایش داده شود که مسیر در لیست سیاه نباشد */}
      {!hideFooterOnRoutes.includes(location.pathname) && <Footer />}
    </main>
    
  )
}