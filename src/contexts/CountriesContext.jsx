import { act, useContext, useEffect, useReducer, useRef } from "react";
import { createContext } from "react";
import { PAGE_SIZE, URL } from "../config/config";
import Country from "../model/country";

const CountriesContext = createContext();
function reducer(state, action) {
  switch (action.type) {
    case "theme":
      return {
        ...state,
        theme: !state.theme,
      };

    case "loading":
      return { ...state, isLoading: true };

    case "countries/filtered":
      return {
        ...state,
        filtered: action.payload,
        error: null,
      };

    case "countries/loaded":
      return {
        ...state,
        countries: action.payload,
        filtered: action.payload,
        isLoading: false,
        error: null,
        current: null,
      };

    case "countries/current":
      return {
        ...state,
        current: action.payload[0],
        isLoading: false,
      };

    case "countries/query":
      return { ...state, query: action.payload };

    case "rejected":
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
  }
}
const initalState = {
  isLoading: false,
  error: null,
  countries: [],
  filtered: [],
  lightTheme: true,
  current: null,
  query: "",
  itemsPerPage: PAGE_SIZE,
};

function CountriesProvider({ children }) {
  const [
    { countries, current, isLoading, error, filtered, query, itemsPerPage },
    dispatch,
  ] = useReducer(reducer, initalState);

  const controllerRef = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(
      () => (query ? fetchCountry(query) : fetchAll()),
      500
    );
    return () => clearTimeout(timeoutId);
  }, [query]);

  async function fetchData(url, actionType) {
    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    controllerRef.current = new AbortController();
    const signal = controllerRef.current.signal;

    dispatch({ type: "loading" });

    try {
      const res = await fetch(url, { signal });
      const data = await res.json();
      if (!data.length)
        throw new Error("No countries found. Please try again.");
      const formattedCountries = data.map((el) => new Country(el));
      dispatch({
        type: actionType,
        payload: formattedCountries,
      });
    } catch (err) {
      dispatch({ type: "rejected", payload: err.message });
    }
  }

  function fetchCountry(query) {
    fetchData(`${URL}name/${query}`, "countries/loaded");
  }

  function fetchAll() {
    fetchData(`${URL}all`, "countries/loaded");
  }

  function fetchCountryCode(code) {
    fetchData(`${URL}alpha/${code}`, "countries/current");
  }

  function setQuery(query) {
    dispatch({ type: "countries/query", payload: query });
  }

  function filterByRegion(region) {
    if (region === "All") {
      dispatch({ type: "countries/filtered", payload: countries });
      return;
    }

    const filtered = countries.filter((country) => country.region === region);
    if (!filtered.length) {
      dispatch({
        type: "rejected",
        payload: "No countries that match the criteria.",
      });
      return;
    }
    dispatch({ type: "countries/filtered", payload: filtered });
  }

  return (
    <CountriesContext.Provider
      value={{
        isLoading,
        error,
        countries,
        fetchCountry,
        fetchCountryCode,
        fetchAll,
        filterByRegion,
        filtered,
        current,
        setQuery,
        query,
        itemsPerPage,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
}

function useCountries() {
  const context = useContext(CountriesContext);
  if (!context) {
    throw new Error("useCountries must be used within a CountriesProvider");
  }
  return context;
}

export { CountriesProvider, useCountries };
