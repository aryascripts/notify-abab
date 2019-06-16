import React from 'react';
import styled from '@emotion/styled';
import { Router, Route } from 'react-router-dom';
import './App.css';

import Header from './components/common/Header';
import Login from './components/Login/Login';
import Home from './components/Home';

import history from './util/History';

export default function App() {
  return (

    <Router history={history}>
      <Header />

      <ContentContainer>
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={Home} />
      </ContentContainer>
    </Router>

  );
}

const ContentContainer = styled.div`
  padding-top: 35px;
  height: 100%;
`;
