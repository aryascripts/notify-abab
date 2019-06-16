import React from 'react';
import Sidebar from './common/Sidebar';
import Editor from './editor/Editor';
import styled from '@emotion/styled';

export default function Home() {
  return (
    <HomeView>
      <Sidebar />
      <Editor />
    </HomeView>
  );
}


const HomeView = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 100%;
`;
