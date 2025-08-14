import { useEffect, useState } from 'react';
import instance from '../config/instance';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ApiCall = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await instance.get(url);
        setData(result.data);
      } catch (error) {
        console.log(error?.message);
        setError(`Something went wrong: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };
    ApiCall();
  }, [url]);

  return { data, loading, error };
};
export default useFetch;
