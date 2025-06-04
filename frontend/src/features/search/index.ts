// Export everything from the slice
export {
    searchReducer,
    setQuery,
    setMinPrice,
    setMaxPrice,
    resetFilters,
} from "./model/searchSlice";

// Export selectors
export * from "./model/selectors";

export * from "./ui/SearchBar";
