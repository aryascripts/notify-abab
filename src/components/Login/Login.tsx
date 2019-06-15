import React from 'react';
import Firebase from './../../util/Firebase';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core'

import google from './../../assets/google.png';

export default function Login() {
  const startAuth = () => {
    Firebase.kickOffAuthentication();
  };

  return (
    <LoginPanel>

      <WelcomeMessage>
        Welcome To Notefy
      </WelcomeMessage>

      <GoogleLoginButton onClick={startAuth}>
        <img width="191" height="46" src={google} />
      </GoogleLoginButton>

    </LoginPanel>
  );
}

const WelcomeMessage = styled.div`

  width: 100%;

  text-transform: uppercase;
  text-align: center;
  font-family: 'Source Code Pro', monospace;
  font-weight: 200;
  font-size: 32px;

  padding: 20px 0;
`;

const transitionDown = keyframes`
  from { height: 0px; }
  to { height: 200px; }
`;

const GoogleLoginButton = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 20px;
`;

const LoginPanel = styled.div`
  width: 50%;
  min-width: 300px;
  background-color: white;
  border-radius: 0 0 30px 30px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  margin: 0 auto;
  height: 0px;
  overflow: hidden;

  animation: ${transitionDown} 250ms linear 1;
  animation-fill-mode: forwards;
  animation-delay: 1s;
`;
