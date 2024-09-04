import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryCard from "./CountryCard";

const Country = () => {
  const [loading, setLoding] = useState(true);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountries();
  });

  const fetchCountries = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
      throw error;
    }
  };

  return (
    <div class="container">
      <div className="row m-5">
        {countries.length > 0 &&
          countries.map((cnt) => <CountryCard cnt={cnt} />)}
      </div>
    </div>
  );
};

export default Country;
