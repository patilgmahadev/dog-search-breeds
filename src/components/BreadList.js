import { useEffect, useContext, memo, useState, useMemo } from "react";
import { getBreeds } from "../services";
import BreedRow from "./BreedRow";
import { context } from "../context/DogBreedSearchContext";
import LoadingSpinner from "./loadingSpinner";
import { getSortedData } from "./Utils";

const BreadList = () => {
  const [breedList, setBreedList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { searchDog, selectedSort } = useContext(context);
  const { searchDogName } = searchDog;

  const sortingList = useMemo(() => {
    return getSortedData(selectedSort.selectSortBy, breedList);
  }, [breedList, selectedSort.selectSortBy]);

  const fetchBreedsBySearch = async () => {
    setIsLoading(true);
    try {
      if (searchDogName !== "") {
        const res = await getBreeds(searchDogName);
        setBreedList(res?.data);
      } else {
        setBreedList([]);
      }
    } catch (error) {
      setError(true);
      console.log("error", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timerId = setTimeout(async () => {
      fetchBreedsBySearch();
    }, 1000);
    return () => clearTimeout(timerId);
  }, [searchDogName]);

  if (error) {
    return <div className="error">We are getting error in fetching data, please try again.</div>;
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <div className="breed-list-container">
        <table id="breads">
          <thead>
            <tr>
              <th>Dog</th>
              <th>Breed Details</th>
            </tr>
          </thead>
          <tbody>
            {breedList?.length > 0 ? (
              sortingList.map((row, idx) => <BreedRow row={row} key={idx} />)
            ) : (
              <tr>
                <td colSpan={2}>No matching record found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default memo(BreadList);
