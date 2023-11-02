import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home, About, Class, ClassTwo, Contact, SharedLayout, Sublog, Gallery, GalleryTwo, Pricing, Join, Error} from "./pages"
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/class' element={<Class />} />
          <Route path='/class/page/2' element={<ClassTwo />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/gallery/page/2' element={<GalleryTwo />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path="/join" element={<Join />} />
          <Route path='/categories/:sublog' element={<Sublog />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App