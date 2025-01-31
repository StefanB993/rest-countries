import { useParams } from "react-router-dom";
import CountryDetails from "../../components/CountryDetails/CountryDetails";
import Loader from "../../components/Loader/Loader";
import { useCountries } from "../../contexts/CountriesContext";
import { useEffect } from "react";

function DetailsPage() {
  const { id } = useParams();
  const { fetchCountryCode, current, isLoading } = useCountries();

  useEffect(() => {
    console.log("effect");
    fetchCountryCode(id);
  }, [id]);

  if (!current) return null;

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && <CountryDetails current={current} />}
    </>
  );
}

export default DetailsPage;
