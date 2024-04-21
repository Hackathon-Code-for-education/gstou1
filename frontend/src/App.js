
import Landing from "./components/Landing/Landing";
import SignupForm from "./components/RegisterForm/Signupform";
import {Router, Routes, Route } from 'react-router-dom';
import LoginForm from "./components/RegisterForm/LoginForm";
import ResetPasswordForm from "./components/RegisterForm/ResetPasswordForm";
import PageUniver from "./components/Pages/Page/University/PageUniver";
import Settings from "./components/Pages/Settings";
import ChatApp from "./components/Pages/Page/University/UniverItem/ChatApp/ChatApp";



function App() {
  return (
    <div className="App">

      
        <Routes>

         
          <Route path="/" element={<Landing />} />
          <Route path="/signupForm" element={<SignupForm />} />
          <Route path="/loginForm" element={<LoginForm />} />
          <Route path="/reset-password" element={<ResetPasswordForm />} />
          <Route path="/page" element={<PageUniver />}/>
          <Route path="/settings" element={<Settings/>} />
          <Route path="/chat" element={<ChatApp />} />
          
        </Routes>
    </div>
  );
}

export default App;