import './App.css';

import React, { useState,useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Welcome from "./Components/Welcome";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";
import Logout from "./Logout/Logout";

import { myUser } from './Api';
 
const TOKEN = 'stranger_token';

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('')
  const [me, setMe] = useState('');
  const [posts, setPosts] = useState([]);
 

  const storeToken =(responseToken) => {   
    localStorage.setItem(TOKEN,responseToken);
    setToken(responseToken)
  }
  
  useEffect (() => {
  const storedToken = localStorage.getItem(TOKEN);
  setToken(storedToken)
  }, [])
  
  const setValue = (func) => {
    return (event) => {func(event.target.value)};
  }

  useEffect(() => {
    if (token) {
      myUser(token)
        .then((me) => {
          setMe(me);
        })
        .catch((error) => {
          console.log(`Failed to fetch me.`);
        });
    }
  })

  return (
    <>
    <Router>
      <Routes>
        <Route 
          exact path="/" 
          element={
            <Welcome
            setPosts={setPosts}
            posts={posts}
            />
          } 
        />
        <Route
          exact path="/login"
          element={
            <Login
              setUsername={setValue(setUsername)}
              setPassword={setValue(setPassword)}
              setToken={setToken}
              username={username}
              password={password}
              token={token}
            />
          }
        />
        <Route
          exact path="/Register"
          element={
            <SignUp
              setUsername={setValue(setUsername)}
              setPassword={setValue(setPassword)}
              setToken={storeToken}
              username={username}
              password={password}
              token={token}
            />
          }
        />
        <Route
          exact path="/home"
          element={
            <Home
          
            />
          }
        />
        <Route
          exact path="/logout"
          element={
            <Logout
            token={token}
            setToken={setToken}
            me={me}
            setMe={setMe}
            />
          } 
         /> 
      </Routes>
    </Router>
    </>
  );
}

export default App;

