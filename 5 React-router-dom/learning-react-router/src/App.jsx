import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Product from './Pages/Product';
import CourseDetails from './Pages/CourseDetails';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/courses' element={<Product />}></Route>
          <Route path="/course/:id" element={<CourseDetails />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
