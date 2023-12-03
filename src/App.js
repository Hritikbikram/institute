import React from 'react'
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Routes,Route } from 'react-router';
import { Home } from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import Courses from './Pages/Courses';
import CourseDetail from './Pages/CourseDetail';
import Testimonials from './Pages/Testimonials';
import SuccessGallery from './Pages/SuccessGallery';
import Enquiry from './Pages/Enquiry';

const App = () => {
  return (
    <>

     
      <Header/>

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<AboutUs />}/>
          <Route path='/course' element={<Courses />}/>
          <Route path='/testimonial' element={<Testimonials />}/>
          <Route path='/course/details' element={<CourseDetail />}/>
          <Route path='/gallery' element={<SuccessGallery />}/>
          <Route path='/contact' element={<Contact />} />
          <Route path='/enquiry' element={<Enquiry />}/>
        </Routes>
          
          
      <Footer/>
    </>
  )
}


export default App;
