import React from "react";
import styled from '@emotion/styled';
import theme from './../../util/Theme';

const height = '35px';

export default function Header() {
  return (
    <TopPanel>
     <Title>Notefy</Title>
    </TopPanel>
  );
}

const TopPanel = styled.div`
  position: fixed;
  left: 0;
  top: 0;

  font-family: 'Source Code Pro', monospace;
  text-transform: uppercase;
  font-size: 16px;
  color: ${theme.textColor};
  line-height: ${height};

  display: flex;
  align-items: center;
  background-color: ${theme.highlightBlue};
  width: 100%;
  height: ${height};

`;

const Title = styled.div`
  height: ${height};
  padding: 0 20px;
  border-right: 1px solid ${theme.background}
`;
