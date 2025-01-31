import { Link } from "react-router-dom";
import { useCountries } from "../../contexts/CountriesContext";
import styles from "./CountriesContainer.module.scss";

function CountriesContainer({ countries }) {
  // const { filtered } = useCountries();
  console.log("mount");
  return (
    <div className={styles.countries}>
      {countries.map((country) => (
        <Country key={country.name} country={country} />
      ))}
    </div>
  );
}

export default CountriesContainer;

function Country({ country }) {
  return (
    <Link to={`${country.id}`}>
      <div className={styles.country}>
        <header className={styles.country__header}>
          <img
            className={styles.country__img}
            src={country.flags}
            alt={country.name}
          />
        </header>
        <div className={styles.country__body}>
          <h2 className={styles.country__name}>{country.name}</h2>
          <p>
            <span>Population:</span> {country.population}
          </p>
          <p>
            <span>Capital:</span> {country.capital}
          </p>
          <p>
            <span>Region:</span> {country.region}
          </p>
        </div>
      </div>
    </Link>
  );
}
