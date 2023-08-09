import { memo, useContext } from "react";
import { context } from "../context/DogBreedSearchContext";
import { SORT_BY } from "./Utils";

const SearchForm = () => {
  const { searchDog, selectedSort } = useContext(context);
  const { searchDogName, setSearchDogName } = searchDog;
  const { selectSortBy, setSelectSortBy } = selectedSort;

  const handleDogBreedChange = (e) => {
    setSearchDogName(e.target.value);
  };

  const handleSortListChange = (e) => {
    setSelectSortBy(e.target.value);
  };

  return (
    <>
      <div className="search-form">
        <div className="search-input-section">
          <label>Enter Dog Name</label>
          <input
            type="text"
            placeholder="Enter dog name"
            value={searchDogName}
            onChange={handleDogBreedChange}
          />
        </div>
        <div>
          <label for="sort-select">By Sort</label>
          <select value={selectSortBy} onChange={handleSortListChange}>
            <option value={SORT_BY.name} defaultChecked>
              Name
            </option>
            <option value={SORT_BY.height}>Height</option>
            <option value={SORT_BY.lifespan}>Lifespan</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default memo(SearchForm);
