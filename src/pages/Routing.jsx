import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components Imports
import SideBar from "../components/Navbar/Sidebar";

//Pages Imports
import Dashboard from "./Dashboard";
import Readers from '../components/Readers/Readers';
import AdjustmentMaker from "../components/Adjustment/AdjustmentMaker";
import AdjustmentChecker from "../components/Adjustment/AdjustmentChecker";
import ForceMatchMaker from "../components/ForceMatch/ForceMatchMaker";
import ForceMatchChecker from "../components/ForceMatch/ForceMatchChecker";
import Header from '../components/Navbar/Header';


function Routing() {
  return (
    <Router>
        <SideBar>
          <Header></Header>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/Readers/Readers" element={<Readers />} />
                <Route path="/Adjustment/AdjustmentMaker" element={<AdjustmentMaker />} />
                <Route path="/Adjustment/AdjustmentChecker" element={<AdjustmentChecker />} />
                <Route path="/ForceMatch/ForceMatchMaker" element={<ForceMatchMaker />} />
                <Route path="/ForceMatch/ForceMatchChecker" element={<ForceMatchChecker />} />
                <Route path="*" element={<> not found</>} />
            </Routes>
        </SideBar>
    </Router>
    // <Router>
    //     <Routes>
    //         <Route path="/" element={<Login />} />
    //     </Routes>
    // </Router>
  )
}

export default Routing