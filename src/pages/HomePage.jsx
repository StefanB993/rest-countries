import CountriesContainer from "../components/CountriesContainer/CountriesContainer";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import Filter from "../components/Filter/Filter";
import Loader from "../components/Loader/Loader";
import Pagination from "../components/Pagination/Pagination";
import Search from "../components/Search/Search";
import { useCountries } from "../contexts/CountriesContext";
import styles from "./HomePage.module.scss";

function HomePage() {
  const { isLoading, error } = useCountries();
  return (
    <main className={styles.homepage}>
      <div className={styles.homepage__header}>
        <Search></Search>
        <Filter></Filter>
      </div>
      <div className={styles.homepage__content}>
        {isLoading && <Loader />}
        {!isLoading && error && <ErrorMessage message={error} />}

        {!isLoading && !error && <Pagination />}
      </div>
    </main>
  );
}

export default HomePage;
