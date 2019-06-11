import { renderHook, act } from "react-hooks-testing-library";
import useFilters from "./";

const testList = ["first", "second", "third", "fourth"];

test("should overwrite an existing filter function if names match", async () => {
  const { result: h } = renderHook(() => useFilters());

  // helper; build a filter function for a given string
  const searchFor = (str: string) => (item: string) => item.includes(str);

  // search for "f", list should be filtered to 2 items
  act(() => h.current.addOrUpdateFilter("search", searchFor("f")));
  expect(h.current.applyFilters(testList)).toHaveLength(2);

  // search for "fi", list should be filtered to 1 item
  act(() => h.current.addOrUpdateFilter("search", searchFor("fi")));
  expect(h.current.applyFilters(testList)).toHaveLength(1);

  // remove filter, list should be back to original
  act(() => h.current.removeFilter("search"));
  expect(h.current.applyFilters(testList)).toHaveLength(4);
});

test("should apply two uniquely named filters to a list", async () => {
  const { result: h } = renderHook(() => useFilters());

  const startsWithFilter = (item: string) => item[0] === "f";
  const searchFilter = (item: string) => item.includes("i");

  // filter to any items starting with "f"
  act(() => h.current.addOrUpdateFilter("startsWith", startsWithFilter));
  expect(h.current.applyFilters(testList)).toHaveLength(2);

  // filter to any items containing "i"
  act(() => h.current.addOrUpdateFilter("search", searchFilter));
  expect(h.current.applyFilters(testList)).toHaveLength(1);

  // remove startsWith filter
  act(() => h.current.removeFilter("startsWith"));
  expect(h.current.applyFilters(testList)).toHaveLength(2);

  // remove search filter
  act(() => h.current.removeFilter("search"));
  expect(h.current.applyFilters(testList)).toHaveLength(4);
});
