import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { CountriesProvider } from "./contexts/CountriesContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import HomePage from "./pages/HomePage";
import { useEffect } from "react";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import DetailsPage from "./pages/DetailsPage/DetailsPage";

function App() {
  useEffect(() => {
    document.body.className = "theme-light";
  }, []);

  return (
    <div className="grid">
      <CountriesProvider>
        <ThemeProvider>
          <Header />
        </ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path=":id" element={<DetailsPage />} />
          </Routes>
        </BrowserRouter>
      </CountriesProvider>
    </div>
  );
}

export default App;
