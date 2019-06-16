import React from 'react';
import Firebase from './../../util/Firebase';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core'

import Notify from './../common/Notify';
import google from './../../assets/google.png';

export default function Login() {
  const startAuth = () => {
    Firebase.kickOffAuthentication();
  };

  return (
    <Notify>

      <WelcomeMessage>
        Welcome To Notefy
      </WelcomeMessage>

      <GoogleLoginButton onClick={startAuth}>
        <img width="191" height="46" src={google} />
      </GoogleLoginButton>

    </Notify>
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

const GoogleLoginButton = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 20px;
`;
