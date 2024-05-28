import { useState, useEffect } from "react";
import axios from "axios";
import { InitialData } from "../models/IInitialData";

interface UseFetchProps {
  url: string;
  method: 'get' | 'post';
}

const useFetch = ({ url, method }: UseFetchProps) => {
  const [data, setData] = useState<InitialData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios[method]<InitialData>(url)
      .then((response) => setData(response.data))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [method, url]);

  return { data, loading, error };
};

export default useFetch;
