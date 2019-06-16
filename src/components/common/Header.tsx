import React from "react";
import styled from '@emotion/styled';
import Theme from './../../util/Theme';
import Indexes from './../../util/ZIndex';

const height = Theme.headerHeight;

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
  z-index: ${Indexes.header};

  font-family: 'Source Code Pro', monospace;
  text-transform: uppercase;
  font-size: 16px;
  color: ${Theme.textColor};
  line-height: ${height};

  display: flex;
  align-items: center;
  background-color: ${Theme.highlightBlue};
  width: 100%;
  height: ${height};

`;

const Title = styled.div`
  height: ${height};
  padding: 0 20px;
  border-right: 1px solid ${Theme.background}
`;
