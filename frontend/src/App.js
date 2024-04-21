
import Landing from "./components/Landing/Landing";
import SignupForm from "./components/RegisterForm/Signupform";
import {Router, Routes, Route } from 'react-router-dom';
import LoginForm from "./components/RegisterForm/LoginForm";
import ResetPasswordForm from "./components/RegisterForm/ResetPasswordForm";
import ChatApp from "./components/Pages/Page/University/UniverItem/ChatApp/ChatApp";
import MenuItems from "./components/Pages/Page/MenuItems";



function App() {
  return (
    <div className="App">

      
        <Routes>

         
          <Route path="/" element={<Landing />} />
          <Route path="/signupForm" element={<SignupForm />} />
          <Route path="/loginForm" element={<LoginForm />} />
          <Route path="/reset-password" element={<ResetPasswordForm />} />
          <Route path="/chat" element={<ChatApp />} />
          <Route path="/page" element={<MenuItems />}/>
          
        </Routes>
    </div>
  );
}

export default App;