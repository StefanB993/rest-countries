import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./Search.module.scss";
import { useCountries } from "../../contexts/CountriesContext";

function Search() {
  const { query, setQuery } = useCountries();

  return (
    <div className={styles.search}>
      <FontAwesomeIcon
        className={styles.search__icon}
        icon={faMagnifyingGlass}
        size="lg"
      />
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        className={styles.search__input}
        placeholder="Search country..."
      />
    </div>
  );
}

export default Search;
