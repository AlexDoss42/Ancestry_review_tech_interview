import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DNA from "./pages/DNA";
import Tree from "./pages/Tree";
import Search from "./pages/Search";
import Extras from "./pages/Extras";
import Survey from "./pages/Survey";
import Thankyou from "./pages/Thankyou";
import SurveyData from "./pages/SurveyData";
import { PageContext } from './Contexts/PageContext';

function App() {
  const [origin_page, setOrigin_page] = useState('');
  const [path, setPath] = useState('');

  return (
        <Router>
          <PageContext.Provider value={{ origin_page, setOrigin_page, path, setPath }}>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/dna" element={<DNA />}/>
              <Route path="/tree" element={<Tree />}/>
              <Route path="/search" element={<Search />}/>
              <Route path="/extras" element={<Extras />}/>
              <Route path="/survey" element={<Survey />}/>
              <Route path="/thankyou" element={<Thankyou />}/>
              <Route path="/surveyData" element={<SurveyData />}/>
            </Routes>
          </PageContext.Provider>
        </Router>
    
  );
}

export default App;
