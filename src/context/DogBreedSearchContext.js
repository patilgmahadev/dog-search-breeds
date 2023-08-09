import { createContext, useState } from "react";
import { SORT_BY } from "../components/Utils";

export const context = createContext();

export const DogBreedSearchContext = ({ children }) => {
  const [searchDogName, setSearchDogName] = useState("");
  const [selectSortBy, setSelectSortBy] = useState(SORT_BY.name);

  const value = {
    searchDog: { searchDogName, setSearchDogName },
    selectedSort: { selectSortBy, setSelectSortBy },
  };

  return <context.Provider value={value}>{children}</context.Provider>;
};
