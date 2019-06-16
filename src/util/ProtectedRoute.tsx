import Firebase from './Firebase';
import { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest}) => (

  <Route { ...rest } render={(props) => (
    Firebase.authenticated ? <Component {...props} />
                           : <Redirect to='/login' />
  )} />

)
