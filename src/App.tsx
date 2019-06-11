import React from "react";
import styled from "@emotion/styled";
import "./app.css";

import Greeting from "./components/Greeting";
import Dependencies from "./components/Dependencies";

export default function App() {
  return (
    <Centered>
      <Split>
        <Panel className="u-flexV u-centerBoth">
          <Greeting />
        </Panel>
        <Panel>
          <Dependencies />
        </Panel>
      </Split>
    </Centered>
  );
}

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 100%;
`;

const Split = styled.div`
  display: grid;
  grid-template-columns: 40% auto;
  width: 80%;
  grid-gap: 30px;
`;

const Panel = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 8px 19px hsla(0, 0%, 0%, 0.06);
  height: 500px;
  overflow: auto;
`;
