import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import Navbar from './Components/Navbar';
import Test from './Components/Test';
import LoginPage from './Pages/LoginPage';
import Land from './Pages/Land';
import { Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate
import Signup from './Pages/SignUp';
import Footer from './Components/Footer';
import { ethers } from "ethers";
import LandregisteryPage from './Pages/LandregisteryPage';
import Transaction from './Pages/Transaction';

function App() {
  // Retrieve the user's role from localStorage or default to 'guest' if not available
  const userRole = localStorage.getItem('userRole') || 'guest';

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
              <Route path="/land" element={<Land />} />
              <Route path="/register" element={<LandregisteryPage />} />

              {/* Conditionally render based on user role */}
              <Route path="/admin" element={userRole === 'admin' ? <HomePage /> : <Navigate to="/login" />} />
              <Route path="/user" element={userRole === 'user' ? <HomePage /> : <Navigate to="/login" />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/transaction" element={<Transaction />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default App;
