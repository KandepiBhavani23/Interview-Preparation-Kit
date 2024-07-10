import { useState, useEffect } from "react";

const useFetch = (API_URL) => {
  const [fetchData, setFetchData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_URL);
        const jsonData = await response.json();
        setFetchData(jsonData);
      } catch (error) {
        setError(error.response);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return [fetchData, error, loading];
};
export default useFetch;
