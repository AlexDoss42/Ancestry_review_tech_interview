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

function App() {
  console.log(1111, window.location.href);
  return (
    <Router>
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
    </Router>
    
  );
}

export default App;
