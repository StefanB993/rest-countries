import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCountries } from "../../contexts/CountriesContext";
import styles from "./CountryDetails.module.scss";
import ButtonBack from "../ButtonBack/ButtonBack";
import Map from "../Map/Map";
function CountryDetails({ current }) {
  const {
    latlng: [lat, lng],
  } = current;

  return (
    <div className={styles.country}>
      <ButtonBack className={styles.country__btn} />
      <div className={styles.country__container}>
        <Flag country={current} />
        <Details country={current} />
      </div>
      <Map position={[lat, lng]} />
    </div>
  );
}

export default CountryDetails;

function Flag({ country }) {
  return (
    <div
      style={{ backgroundImage: `url(${country.flagsBig})` }}
      className={styles.country__flag}
    >
      {/* <img src={country.flagsBig} alt={`Flag of ${country.name}`} /> */}
    </div>
  );
}

function Details({ country }) {
  return (
    <div className={styles.country__details}>
      <h2 className={styles.country__name}>{country.name}</h2>
      <div className={styles.country__infos}>
        <p>
          <span className={styles.country__info}>Native Name: </span>
          {country.native}
        </p>
        <p>
          <span className={styles.country__info}>Population: </span>
          {country.population}
        </p>
        <p>
          <span className={styles.country__info}>Region: </span>
          {country.region}
        </p>
        <p>
          <span className={styles.country__info}>Capital: </span>
          {country.capital}
        </p>
        <p>
          <span className={styles.country__info}>Top Level Domain: </span>
          {country.tld}
        </p>
        <p>
          <span className={styles.country__info}>Language: </span>
          {country.language}
        </p>
      </div>
    </div>
  );
}
