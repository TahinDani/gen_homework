import React from 'react';
import { Switch, Route } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import MainPage from './components/MainPage'
import Complaint from './components/Complaint'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/panaszbejelentes" component={Complaint} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
