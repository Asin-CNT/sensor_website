import Header from '@/components/Header';

import './App.css';
import Home_Main from './sections/Home/Home_Main';
import Q_A_Components from './sections/Q_A/Q_A_Components';
import Enroll from './sections/Login/Enroll_Components'
import LoginPage from './sections/Login/Login_Components';
import Q_A_write from './sections/Q_A/Q_A_Write_Components';

import Mypage from './sections/Mypage/Mypage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {AuthProvider} from './context/AuthContext'

function App() {
  return (
   <AuthProvider>
     <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home_Main />} />
          <Route path="/contact" element={<Q_A_Components />} />
           <Route path="/login" element={<LoginPage />} />
            <Route path="/enroll" element={<Enroll />} />
            <Route path='/Mypage' element={<Mypage/>}/>
             <Route path='/write' element={<Q_A_write/>}/>
        </Routes>
        
      </div>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
