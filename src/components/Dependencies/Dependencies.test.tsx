import React from "react";
import { render, fireEvent } from "react-testing-library";
import pkg from "../../../package.json";

import Dependencies from "./";

test("renders the correct number of dependencies", async () => {
  const { getByTestId } = render(<Dependencies />);

  const depsCount = Object.values(pkg.dependencies).length;
  const devDepsCount = Object.values(pkg.devDependencies).length;

  expect(getByTestId("depsList").children.length).toBe(depsCount);
  expect(getByTestId("devDepsList").children.length).toBe(devDepsCount);
});

test("search bar filters the list", async () => {
  const { getByTestId } = render(<Dependencies />);

  const searchBar = getByTestId("searchDependencies_searchBar");
  const countBefore = getByTestId("depsList").children.length;

  fireEvent.change(searchBar, { target: { value: "react" } });

  const countAfter = getByTestId("depsList").children.length;
  expect(countAfter).toBeLessThan(countBefore);
});
