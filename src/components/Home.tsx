import React from 'react';
import Sidebar from './common/Sidebar';
import Editor from './editor/Editor';
import styled from '@emotion/styled';

const textContent = '';
// const content = firebase.database().ref('pages/001');
// content.on('value', snapshot => {
//
// });

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
