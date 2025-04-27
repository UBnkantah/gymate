import {Routes, Route} from 'react-router-dom'
import {Home, About, Class, ClassTwo, Contact, SharedLayout, Sublog, Gallery, GalleryTwo, Pricing, Join, Error} from "./pages"
import { TfiAngleDoubleUp } from "react-icons/tfi";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from 'react';


const App = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div onClick={scrollToTop} style={{ display: visible ? "flex" : "none" }} className='fixed bottom-20 right-10 cursor-pointer bg-primary text-white transition-all ease-in-out duration-[1s] hover:text-primary hover:bg-white shadow flex flex-col item-center rounded-full p-2 justify-center z-50'>
        <div className='mx-auto'>
          <TfiAngleDoubleUp />
        </div>
      
     <p className='text-sm font-[600]'>TOP</p>
      </div>
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
    </div>
  )
}

export default App