import React from "react";
import styled from "@emotion/styled";

export default function Header() {
  return <TopPanel>Notify</TopPanel>;
}

const TopPanel = styled.div`
  position: fixed;
  left: 0;
  top: 0;

  font-family: monospace;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  padding: 0 20px;
  background-color: #f0f4f8;
  width: 100%;
  height: 35px;
`;
