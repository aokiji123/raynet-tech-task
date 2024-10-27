import {useEffect, useState} from 'react';
import {getAllClientsData} from '@/utils/getAllClientsData.ts';
import {ClientsData} from '@/types/clients/clients-data.type.ts';

function useClientsData() {
  const [clientsData, setClientsData] = useState<ClientsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getAllClientsData();
        setClientsData(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {clientsData, loading, error};
}

export default useClientsData;
