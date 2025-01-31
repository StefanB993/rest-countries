import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./Filter.module.scss";
import { FILTERS } from "../../config/config";
import { useState } from "react";
import { useCountries } from "../../contexts/CountriesContext";

function Filter() {
  const [displayed, setDisplayed] = useState(false);
  const { filterByRegion } = useCountries();

  function handleClick() {
    setDisplayed((prev) => !prev);
  }

  function handleOptionClick(element) {
    handleClick();
    filterByRegion(element);
  }

  return (
    <div className={styles.filter}>
      <button onClick={handleClick} className={styles.filter__btn}>
        <span>Filter by region</span>
        <FontAwesomeIcon icon={faChevronDown} />
      </button>

      <FilterOptions render={displayed} onOptionClick={handleOptionClick} />
    </div>
  );
}

export default Filter;

function FilterOptions({ render, onOptionClick }) {
  if (!render) return;
  return (
    <ul className={styles.filter__list}>
      {FILTERS.map((filter) => (
        <FilterOption
          filter={filter}
          key={filter}
          onOptionClick={onOptionClick}
        ></FilterOption>
      ))}
    </ul>
  );
}

function FilterOption({ filter, onOptionClick }) {
  return <li onClick={() => onOptionClick(filter)}>{filter}</li>;
}
