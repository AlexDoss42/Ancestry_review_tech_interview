import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DNA from "./pages/DNA";
import Tree from "./pages/Tree";
import Search from "./pages/Search";
import Extras from "./pages/Extras";
import Survey from "./pages/Survey";
import Thankyou from "./pages/Thankyou";
import SurveyData from "./pages/SurveyData";

import { PageProvider } from './Contexts/PageContext'

function App(): JSX.Element {
  
  return (
      <PageProvider>
        <Router>
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
        </Router>
      </PageProvider>
  );
}

export default App;
