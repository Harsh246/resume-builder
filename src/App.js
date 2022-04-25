import "./App.css";
// import {useSelector, useDispatch} from 'react-redux';
import Navbar from "./components/Navbar";

import { Route, Routes } from "react-router-dom";

import CertificationForm from "./components/CertificationForm";
import EducationForm from "./components/EducationForm";
import ObjectiveForm from "./components/ObjectiveForm";
import ProjectForm from "./components/ProjectForm";
import SkillsForm from "./components/SkillsForm";
import UserInfoForm from "./components/UserInfoForm";
import Resume from "./components/Resume";

function App() {
  //  const state = useSelector((state)=>state.count);

  //  const dispatch = useDispatch();

  return (
    <div className="App">
      <Navbar />
      <div id="main">
        <Routes>
          <Route path="/" element={<UserInfoForm />} exact />
          <Route path="/objective" element={<ObjectiveForm />} exact />
          <Route path="/education" element={<EducationForm />} exact />
          <Route path="/certifications" element={<CertificationForm />} exact />
          <Route path="/projects" element={<ProjectForm />} exact />
          <Route path="/skills" element={<SkillsForm />} exact />
          
          <Route path="/resume" element={<Resume />} exact />

        </Routes>
      </div>
    </div>
  );
}

export default App;
