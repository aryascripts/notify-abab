import { useState } from "react";

export default function useFilters(defaultFilters: FilterCollection = {}) {
  const [filters, setFilters] = useState(defaultFilters);

  const addOrUpdateFilter: AddOrUpdateFilter = (name, filterFn) => {
    setFilters({
      ...filters,
      [name]: filterFn
    });
  };

  const removeFilter: RemoveFilter = name => {
    const newFilters = { ...filters };
    delete newFilters[name];
    setFilters(newFilters);
  };

  const filtersArray = Object.values(filters);
  const applyFilters = (items): [] => {
    return filtersArray.reduce(
      (accumulator, filterFn) => accumulator.filter(filterFn),
      items
    );
  };

  return { addOrUpdateFilter, removeFilter, applyFilters };
}

// types

export interface FilterFunction {
  (item): boolean;
}

export interface FilterCollection {
  [name: string]: FilterFunction;
}

export interface AddOrUpdateFilter {
  (name: string, filterFn: FilterFunction): void;
}

export interface RemoveFilter {
  (name: string): void;
}
