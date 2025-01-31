import { useCountries } from "../contexts/CountriesContext";

function Test() {
  const { countries } = useCountries();

  return <div></div>;
}

export default Test;
