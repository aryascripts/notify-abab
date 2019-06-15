import React from "react";
import styled from "@emotion/styled";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/common/Header";
import Login from "./components/Login/Login";
import Home from "./components/Home";

export default function App() {
  return (
    <Router>
      <Header />

      <ContentContainer>
        <Route exact path="/" component={Login} />
        <Route exact path="/app" component={Home} />
      </ContentContainer>
    </Router>
  );
}

const ContentContainer = styled.div`
  padding-top: 35px;
`;
