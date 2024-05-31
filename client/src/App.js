import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import Navbar from './Components/Navbar';
import Test from './Components/Test';
import LoginPage from './Pages/LoginPage';
import Land from './Pages/Land';
import { Routes, Route } from 'react-router-dom';
import Signup from './Pages/SignUp';
import PrivateRoute from './Pages/PrivateRoute.page';
import { UserProvider } from "./contexts/user.context";
function App() {
  const t = true;
  const f = false;
  return (
    <main>
      <Navbar />
      <div className='flex'>
        <Test />
        <div className='ml-[10rem] container'>
          <UserProvider>
            <Routes>
              <Route exact path="//LandRise/" element={<HomePage />} />
              <Route element={<PrivateRoute />}>
                <Route exact path="//LandRise/" element={<HomePage />} />
              </Route>

              <Route path="/LandRise/login" element={<LoginPage />} />
              <Route path="/LandRise/signup" element={<Signup />} />
              <Route path="/LandRise/login/buyer" element={<LoginPage />} />
              <Route path="/LandRise/login/seller" element={<LoginPage />} />
              <Route path="/*" element={<>Page Not Found!</>} />
            </Routes>
          </UserProvider>
        </div>
      </div>
    </main>
  );
}

export default App;
{
  /*
  
  */
}