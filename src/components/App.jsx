import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Header from '../sections/header/Header';
import About from '../sections/about/About';
import Project from '../sections/project/Project';
import Certificate from '../sections/certificate/Certificate';
import Contact from '../sections/contact/Contact';
import Footer from '../sections/footer/Footer';
import Canvas from './Canvas';
import Design from '../sections/design/Design';
import FloatingNav from '../sections/floating-nav/FloatingNav';

const App = () => {
  return (
    <Router>
      <main>
        <Canvas amount={30} />
        <Header />
        <Routes>
          <Route
            path='/'
            element={
              <>
                <About />
                <Project projectId='proshop' />
                <Project projectId='devconnector' />
                <Project projectId='jobify' />
                <Project projectId='online_exam_system' />
                <Design />
                <Certificate />
                <Contact />
                <Footer />
                <FloatingNav />
              </>
            }
          />

          <Route path='*' element={<Navigate replace to='/' />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
