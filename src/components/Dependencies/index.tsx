import React from "react";
import styled from "@emotion/styled";
import pkg from "../../../package.json";
import useFilters from "../../hooks/useFilters";
import SearchDependencies from "./SearchDependencies";

// Helper functions

function objectToArray(obj) {
  const keys = Object.keys(obj);
  return keys.map(k => ({ name: k, value: obj[k] }));
}

function mapDepsArr(deps) {
  return deps.map(({ name, value }) => (
    <li key={name}>
      <A
        href={`https://www.npmjs.com/package/${name}`}
        title="View package on npm"
        target="npm"
      >
        {name}
        <Version>{value}</Version>
      </A>
    </li>
  ));
}

// data

const allDependencies = objectToArray(pkg.dependencies);
const allDevDependencies = objectToArray(pkg.devDependencies);

// components

export default function Dependencies() {
  const { addOrUpdateFilter, removeFilter, applyFilters } = useFilters();

  const dependencies = applyFilters(allDependencies);
  const devDependencies = applyFilters(allDevDependencies);

  return (
    <div>
      <SearchDependencies
        addOrUpdateFilter={addOrUpdateFilter}
        removeFilter={removeFilter}
      />

      <div>
        <h4>Dependencies</h4>
        <ul data-testid="depsList">{mapDepsArr(dependencies)}</ul>
      </div>

      <div>
        <h4>Dev Dependencies</h4>
        <ul data-testid="devDepsList">{mapDepsArr(devDependencies)}</ul>
      </div>
    </div>
  );
}

const Version = styled.span`
  background: #f0f4f8;
  color: #829ab1;
  margin-left: 5px;
  font-size: 0.9rem;
  padding: 1px 4px;
  border-radius: 3px;
`;

const A = styled.a`
  color: inherit;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;
