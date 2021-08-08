import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Destination from './Components/Destination/Destination';
import PrivateRoute from "./Components/Login/PrivateRoute"
import { createContext, useState } from 'react';
export const UserContext = createContext();


function App() {
  const[loggedInUser,SetLoggedInUser]=useState({})
  const[search,setSearch]=useState({})
return (
    <UserContext.Provider value={[loggedInUser,SetLoggedInUser,search,setSearch]}>
    <Router>
      <Header></Header>
      <Switch>
      <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
           <Login/>
        </Route>
        <PrivateRoute path="/destination/:id">
            <Destination/>
          </PrivateRoute>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
