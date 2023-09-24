import React from 'react'
import LandingPage from './Pages/LandingPage'
import RibinForBusinessPage from './Pages/RibinForBusinessPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PartnerWithUsPage from './Pages/PartnerWithUsPage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ribinforbusiness" element={<RibinForBusinessPage />} />
        <Route path="/partnerwithus" element={<PartnerWithUsPage />} />
      </Routes>
    </Router>
  )
}

export default App

