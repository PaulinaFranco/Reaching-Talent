import React from 'react';
import './App.css';


import RecruiterLogin from './Components/Recruiter/Admin-Pages/Recruiter-Home';


import LoginForm from './Components/Candidate/Pages/Home.js';
import TalentTest from './Components/Candidate/Pages/Talent-Test.js';
function App() {
  return (

  <div>
    < LoginForm />
    < TalentTest />

    <RecruiterLogin/>
  </div>

  );
}

export default App;
