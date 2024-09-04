import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryCard from "./CountryCard";

const Country = () => {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountries();
  });

  const fetchCountries = async () => {
    try {
      const response = await axios.get(
        "https://xcountries-backend.azurewebsites.net/all"
      );
      setCountries(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div class="container">
      <div className="row m-5">
        {loading ? (
          <p>Loading...</p> // Show this when loading
        ) : countries.length > 0 ? (
          countries.map((cnt) => <CountryCard key={cnt.code} cnt={cnt} />)
        ) : (
          <p>No countries found.</p> // Show this if there are no countries
        )}
      </div>
    </div>
  );
};

export default Country;
