import Header from '@/components/Header';

import './App.css';
import Home_Main from './sections/Home/Home_Main';
import Q_A_Components from './sections/Q_A/Q_A_Components';
import LoginPage from './sections/Login/Login_Components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
     <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home_Main />} />
          <Route path="/contact" element={<Q_A_Components />} />
            <Route path="/login" element={<LoginPage />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
