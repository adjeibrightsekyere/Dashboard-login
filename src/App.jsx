import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { loadUser } from './slices/authSlice';
import Login from './Pages/login';
import Dashboard from './Pages/dashboard';
import './index.css'


function App () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path='/login' Component={Login} />
        <Route path='/dashboard' Component={Dashboard} />
      </Routes>
    </Router>
  );
};
export default App;
