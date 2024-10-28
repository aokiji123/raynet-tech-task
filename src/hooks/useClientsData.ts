import {useEffect, useState} from 'react';
import {getClientsData} from '@/utils/getClientsData.ts';
import {ClientsType} from '@/types';

export function useClientsData() {
  const [clientsData, setClientsData] = useState<ClientsType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getClientsData();
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
