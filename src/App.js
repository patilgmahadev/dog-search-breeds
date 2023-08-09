import "./styles.css";
import { DogBreedSearchContext } from "./context/DogBreedSearchContext";
import SearchForm from "./components/SearchForm";
import BreadList from "./components/BreadList";

export default function App() {
  return (
    <div className="App">
      <h1>Dog Breed Search</h1>
      <DogBreedSearchContext>
        <SearchForm />
        <BreadList />
      </DogBreedSearchContext>
    </div>
  );
}
