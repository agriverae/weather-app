import React, { useEffect } from "react";
import { useFetch } from "src/Commons/Hooks";
import Head from "next/head";

const apiUrl =
  "https://api.openweathermap.org/data/2.5/onecall?lon=-58.377232&lat=-34.613152&exclude=hourly,minutely,current&appid=8a58cecf6705453f88043071d7ccb703";

const Home = () => {
  const [response, error, isLoading] = useFetch(apiUrl);

  return (
    <div className="container">
      <Head>
        <title>Weather App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {console.log(response)}
    </div>
  );
};

export default Home;
