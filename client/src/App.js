import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import Navbar from './Components/Navbar';
import Test from './Components/Test';
import LoginPage from './Pages/LoginPage';
import Land from './Pages/Land';
import { Routes, Route } from 'react-router-dom';
import Signup from './Pages/SignUp';
import Footer from './Components/Footer';

function App() {
  return (
    <main className="h-screen">
      <div className="flex flex-col h-full">
        <Navbar />
        <div className="flex flex-grow">
          <div className="fixed left-0 top-[4.4rem] h-full">
            <Test />
          </div>
          <div className="md:ml-[6rem] container overflow-y-auto">
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/LandRise/login/buyer" element={<LoginPage />} />
              <Route path="/LandRise/login/seller" element={<LoginPage />} />
              <Route path="/*" element={<>Page Not Found!</>} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>

    </main>
  );
}

export default App;
