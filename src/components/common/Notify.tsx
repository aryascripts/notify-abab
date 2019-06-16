import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

export default function Notify(props) {
  return (
    <NotifyPanel>
      { props.children }
    </NotifyPanel>
  );
}

const transitionDown = keyframes`
  from { height: 0px; }
  to { height: 200px; }
`;

const NotifyPanel = styled.div`
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
