import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
import ServiceSection from './Components/Services/ServiceSection';
import FeaturedSection from './Components/Featured/FeaturedSection';
import ManuSection from './Components/Manu/ManuSection';
import SurveySection from './Components/Survey/SurveySection';
import Footer from './Components/Footer';
import ContactSection from './Components/Contact/ContactSection';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Change import to include Routes

import Login from './Components/Auth/Login.jsx';
import Fullpage from './Components/Fullpage/Fullpage.jsx';
import Signup from './Components/Auth/Signup.jsx';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes> {/* Wrap your Routes in a Routes component */}
          <Route path='/' element={<Fullpage/>} />
          <Route path='/head' element={<HeroSection />} />
          <Route path='/featured' element={<FeaturedSection />} />
          <Route path='/menu' element={<ManuSection />} />
          <Route path='/services' element={<ServiceSection />} />
          <Route path='/review' element={<SurveySection />} />
          <Route path='/table' element={<ContactSection />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
