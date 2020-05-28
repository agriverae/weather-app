import { useEffect, useState } from "react";

export const useFetch = (url, options = {}) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(url, options);
        const json = await res.json();
        const fiveDays = json.daily.slice(0, 5);
        setResponse(fiveDays);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  return [response, error, isLoading];
};
