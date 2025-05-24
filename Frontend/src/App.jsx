
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Left from '../Home/left/Left';
import Right from '../Home/right/Right';
import Logout from '../Home/left1/Logout';
import Signup from './components/signup';
import Login from './components/Login';
import { useAuth } from './context/AuthProvider';


function App() {
  const [authUser, setAuthUser ] = useAuth();
console.log(setAuthUser)



  return (
    <Routes>
      <Route 
        path="/" 
        element={authUser ? (
          <div className="flex h-screen">
            <Logout />
            <Left />
            <Right />
          </div>
        ) : (
          <Navigate to ={"/login"}/>
        )} 
      />
      <Route path="/login" element={authUser ? <Navigate to={"/"} /> : <Login />} />
      <Route path="/signup"element={authUser ? <Navigate to={"/"} /> : <Signup />} />
    </Routes>
  );
}

export default App;
