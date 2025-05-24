import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Trends from './components/Trends';
import HomePage from './Pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SliderC from './components/SliderC';
import PropertyPage from './Pages/PropertyPage'
import Chatbot from './components/Chatbot';
import { Auth } from './components/auth';
import './App.css';
import { db } from './config/firebase';
import { getDocs,collection } from 'firebase/firestore';

function App() {
  const [userList, setUserList] = useState([]);

  const usersCollectionRef = collection(db, "users")

  useEffect(() => {   
    const getUserList = async () => {
      // read data and set list
      try{
        const data= await getDocs(usersCollectionRef);
        const filteredData = data.docs.map((doc => ({
          ...doc.data(),
          id: doc.id,
        })));
        setUserList(filteredData);
      } catch(err){
        console.error(err);
      }
      
    };
    getUserList();

  } , []);

  const getUserList = async () => {
    const usersRef = db.collection('users');
    const snapshot = await usersRef.get();
    const usersList = snapshot.docs.map(doc => doc.data());
    setUserList(usersList);
  }
  return (
    <>
      <Router>
        <Chatbot />
        <div>
          <Navbar />
          <Sidebar />
          <Trends />
          <Sell />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/" component={<SliderC />} />
            {/*<Route path="/property/:id" component={PropertyPage} />*/}
            <Route path="/test" element={<Sell />} />
          </Routes>
        </div>
      </Router>
      <div classname="App">
        <Auth />
        
          
      </div>
    </>
  );
}

export default App;
