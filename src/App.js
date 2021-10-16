import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar'
import { Stack } from '@material-ui/core';
import PostCard from './components/postCard';
import React, { Component } from "react";
import LoginPage from './components/loginPage';
import RegistPage from './components/registPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  
  return (
    <div className="App">
      <Router>
      <NavBar>
      </NavBar>
      <Switch>
          <Route path="/login">
              <br/>
            <Stack
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={3}
          style={{marginTop:'30px'}}
          >
            <LoginPage/>
            </Stack>
          </Route>
          <Route path="/register">
          <RegistPage></RegistPage>
          </Route>
          <Route path="/">
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
