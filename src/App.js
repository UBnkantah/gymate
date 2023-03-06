import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from './pages/Contact'
import Class from './pages/Class'
import ClassTwo from './pages/ClassTwo'
import Gallery from "./pages/Gallery"
import GalleryTwo from './pages/GalleryTwo'
import Join from './pages/Join'
import Sublog from './pages/Sublog'
import Pricing from './pages/Pricing'
import Error from './pages/Error'
import SharedLayout from './pages/SharedLayout'

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
    </BrowserRouter>
  )
}

export default App