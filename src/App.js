import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from './pages/Contact'
import Class from './pages/Class'
import Shop from "./pages/Shop"
import Join from './pages/Join'
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
          <Route path='/shop' element={<Shop />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/join" element={<Join />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App