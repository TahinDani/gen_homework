import React from 'react';
import { Switch, Route } from "react-router-dom";
import Header from './components/Header'
import Complaint from './components/Complaint'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/panaszbejelentes" component={Complaint} />
      </Switch>
    </div>
  );
}

export default App;
