import React, { useState } from "react";
import { AddOrUpdateFilter, RemoveFilter } from "../../hooks/useFilters";
import styled from "@emotion/styled";

interface SearchDependenciesProps {
  addOrUpdateFilter: AddOrUpdateFilter;
  removeFilter: RemoveFilter;
}

export default function SearchDependencies({
  addOrUpdateFilter,
  removeFilter
}: SearchDependenciesProps) {
  const [value, setValue] = useState("");

  const updateSearch = e => {
    const newValue = e.target.value;

    if (newValue.length === 0) {
      removeFilter("search");
    } else {
      addOrUpdateFilter("search", item => item.name.includes(newValue));
    }

    setValue(newValue);
  };

  return (
    <SearchInput
      type="text"
      value={value}
      onChange={updateSearch}
      placeholder="Search..."
      data-testid="searchDependencies_searchBar"
    />
  );
}

const SearchInput = styled.input`
  width: 100%;
  border-radius: 3px;
  margin-bottom: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 10pt;
  padding: 6px;
`;
