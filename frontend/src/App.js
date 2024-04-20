
import Landing from "./components/Landing/Landing";
import SignupForm from "./components/RegisterForm/Signupform";
import {Router, Routes, Route } from 'react-router-dom';
import LoginForm from "./components/RegisterForm/LoginForm";
import ResetPasswordForm from "./components/RegisterForm/ResetPasswordForm";
import PageSer from "./components/Page/Page";



function App() {
  return (
    <div className="App">
      
        <Routes>

         
          <Route path="/" element={<Landing />} />
          <Route path="/pageSer" element={

      <PageSer />

  }/>
          <Route path="/signupForm" element={<SignupForm />} />
          <Route path="/loginForm" element={<LoginForm />} />
          <Route path="/reset-password" element={<ResetPasswordForm />} />
          
        </Routes>
    </div>
  );
}

export default App;