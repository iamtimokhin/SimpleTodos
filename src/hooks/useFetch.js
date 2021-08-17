import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        setTimeout(async () => {
          const res = await fetch(url);
          const json = await res.json();
          setResponse(json);
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  return { response, isLoading, error, setResponse };
};

export default useFetch;
